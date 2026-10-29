// the inspirations wall: move around and zoom like a map.
// mouse: drag to move, scroll wheel to move, ctrl/cmd + wheel or the +/- buttons to zoom.
// trackpad: two fingers to move, pinch to zoom. phone: one finger to move, pinch to zoom, tap a picture for its card.
const WALL_W = 2600, WALL_H = 1700, MAX = 1.8;

export function attachWall(vp) {
  if (!vp) return () => {};
  const wall = vp.querySelector('.wall');
  if (!wall) return () => {};
  wall.style.transformOrigin = '0 0';
  let s = 1, ox = 0, oy = 0;

  const minScale = () => Math.min(1, Math.max(vp.clientWidth / WALL_W, vp.clientHeight / WALL_H) * 0.6);
  const clamp = () => {
    s = Math.min(MAX, Math.max(minScale(), s));
    const w = WALL_W * s, h = WALL_H * s, vw = vp.clientWidth, vh = vp.clientHeight;
    ox = w <= vw ? (vw - w) / 2 : Math.min(0, Math.max(vw - w, ox));
    oy = h <= vh ? (vh - h) / 2 : Math.min(0, Math.max(vh - h, oy));
  };
  const apply = () => { clamp(); wall.style.transform = 'translate(' + ox.toFixed(1) + 'px, ' + oy.toFixed(1) + 'px) scale(' + s.toFixed(4) + ')'; };
  // zoom keeping the point (px, py) inside the viewport fixed
  const zoomAt = (ns, px, py) => {
    ns = Math.min(MAX, Math.max(minScale(), ns));
    ox = px - (px - ox) * (ns / s);
    oy = py - (py - oy) * (ns / s);
    s = ns;
    apply();
  };
  const local = (e) => { const r = vp.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };

  // start: the middle cluster, a little zoomed out on small screens
  s = Math.min(1, Math.max(minScale(), 0.55, vp.clientWidth / 1300));
  ox = vp.clientWidth / 2 - 1150 * s;
  oy = vp.clientHeight / 2 - 560 * s;
  apply();

  // trackpad two-finger scroll / mouse wheel moves; pinch (sent as ctrl + wheel) zooms
  const onWheel = (e) => {
    e.preventDefault();
    const k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? vp.clientHeight : 1;
    if (e.ctrlKey || e.metaKey) {
      const [px, py] = local(e);
      zoomAt(s * Math.exp(Math.max(-0.4, Math.min(0.4, -e.deltaY * k * 0.01))), px, py);
    } else {
      ox -= e.deltaX * k; oy -= e.deltaY * k;
      if (e.shiftKey && !e.deltaX) { ox -= e.deltaY * k; oy += e.deltaY * k; }
      apply();
    }
  };
  // desktop Safari sends its own pinch events
  // (on iPhone these also fire for finger pinches, which the pointer code below already handles)
  let g0 = 1;
  const onGestureStart = (e) => { e.preventDefault(); g0 = s; };
  const onGestureChange = (e) => { e.preventDefault(); if (pts.size) return; const [px, py] = local(e); zoomAt(g0 * e.scale, px, py); };

  // fingers and mouse: one pointer drags, two pointers pinch and move together
  const pts = new Map();
  let start = null, moved = 0, downOn = null;
  const snapshot = () => {
    const p = [...pts.values()];
    if (p.length >= 2) {
      const [a, b] = p;
      start = { two: true, d: Math.hypot(a.x - b.x, a.y - b.y) || 1, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, s, ox, oy };
    } else if (p.length === 1) {
      start = { two: false, x: p[0].x, y: p[0].y, ox, oy };
    } else start = null;
  };
  const onDown = (e) => {
    if (e.target.closest && e.target.closest('.wctl')) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const [x, y] = local(e);
    pts.set(e.pointerId, { x, y });
    if (pts.size === 1) { moved = 0; downOn = e.target.closest ? e.target.closest('.piece') : null; }
    try { vp.setPointerCapture(e.pointerId); } catch (err) {}
    vp.classList.add('grabbing');
    snapshot();
  };
  const onMove = (e) => {
    if (!pts.has(e.pointerId) || !start) return;
    const [x, y] = local(e);
    pts.set(e.pointerId, { x, y });
    const p = [...pts.values()];
    if (start.two && p.length >= 2) {
      const [a, b] = p;
      const d = Math.hypot(a.x - b.x, a.y - b.y) || 1, mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const ns = Math.min(MAX, Math.max(minScale(), start.s * d / start.d));
      // the wall point that was under the fingers' midpoint stays under it
      ox = mx - (start.mx - start.ox) * (ns / start.s);
      oy = my - (start.my - start.oy) * (ns / start.s);
      s = ns;
      moved = 99;
    } else if (!start.two) {
      ox = start.ox + x - start.x; oy = start.oy + y - start.y;
      moved = Math.max(moved, Math.abs(x - start.x) + Math.abs(y - start.y));
    }
    apply();
  };
  const onUp = (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.delete(e.pointerId);
    snapshot();
    if (!pts.size) {
      vp.classList.remove('grabbing');
      // a tap (no real movement) on a picture shows its card; a tap elsewhere hides it
      if (moved < 6 && e.type === 'pointerup') {
        vp.querySelectorAll('.piece.on').forEach((n) => { if (n !== downOn) n.classList.remove('on'); });
        if (downOn) downOn.classList.toggle('on');
      }
    }
  };

  // + / − / whole-wall buttons
  const ctl = document.createElement('div');
  ctl.className = 'wctl';
  ctl.innerHTML = '<button type="button" data-z="in" aria-label="zoom in">+</button><button type="button" data-z="out" aria-label="zoom out">−</button><button type="button" data-z="all" aria-label="see the whole wall">all</button>';
  ctl.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    const cx = vp.clientWidth / 2, cy = vp.clientHeight / 2;
    if (b.dataset.z === 'in') zoomAt(s * 1.35, cx, cy);
    else if (b.dataset.z === 'out') zoomAt(s / 1.35, cx, cy);
    else { s = minScale(); apply(); }
  });
  vp.appendChild(ctl);

  // keyboard: arrows move, + and − zoom
  const onKey = (e) => {
    const step = 80;
    const cx = vp.clientWidth / 2, cy = vp.clientHeight / 2;
    if (e.key === 'ArrowLeft') ox += step; else if (e.key === 'ArrowRight') ox -= step;
    else if (e.key === 'ArrowUp') oy += step; else if (e.key === 'ArrowDown') oy -= step;
    else if (e.key === '+' || e.key === '=') return zoomAt(s * 1.25, cx, cy);
    else if (e.key === '-' || e.key === '_') return zoomAt(s / 1.25, cx, cy);
    else return;
    e.preventDefault(); apply();
  };

  const onResize = () => apply();
  vp.addEventListener('wheel', onWheel, { passive: false });
  vp.addEventListener('gesturestart', onGestureStart, { passive: false });
  vp.addEventListener('gesturechange', onGestureChange, { passive: false });
  vp.addEventListener('pointerdown', onDown);
  vp.addEventListener('pointermove', onMove);
  vp.addEventListener('pointerup', onUp);
  vp.addEventListener('pointercancel', onUp);
  vp.addEventListener('keydown', onKey);
  window.addEventListener('resize', onResize);
  if (!vp.hasAttribute('tabindex')) vp.setAttribute('tabindex', '0');

  return () => {
    vp.removeEventListener('wheel', onWheel);
    vp.removeEventListener('gesturestart', onGestureStart);
    vp.removeEventListener('gesturechange', onGestureChange);
    vp.removeEventListener('pointerdown', onDown);
    vp.removeEventListener('pointermove', onMove);
    vp.removeEventListener('pointerup', onUp);
    vp.removeEventListener('pointercancel', onUp);
    vp.removeEventListener('keydown', onKey);
    window.removeEventListener('resize', onResize);
    ctl.remove();
  };
}
