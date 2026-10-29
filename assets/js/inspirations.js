// generated from the design canvas board; edit content in /content, not here.
import { html, render, Component as PreactComponent } from './vendor/preact-htm.js';
import { loadContent, pageProps } from './site.js';

class DCLogic extends PreactComponent {
  constructor(p) { super(p); this.state = {}; }
  render() { const v = Object.assign({ SITE: window.CONTENT, FOOT: window.FOOT_LINKS || {} }, this.renderVals()); return (this.props.part === 'strip' ? tplStrip : tpl)(v); }
}

function tpl(v) {
  return html`
<div style="--ink: #1E2B55; background: #F4EBD6; min-height: 100vh; display: flex; flex-direction: column; box-sizing: border-box; padding: 0 32px 28px">
<header class="hdr" style="max-width: 1216px; width: 100%; margin: 0 auto; box-sizing: border-box">
<a href="index.html" class="namebox inter" aria-label="yusuf misdaq, home">yusuf<br />misdaq</a>
<nav class="menu" aria-label="main" onMouseEnter=${v.holdOn} onMouseLeave=${v.holdOff}>
${(v.menu || []).map((m) => html`
<a href=${m.href} class="mi" aria-current=${m.current} aria-label=${m.aria}><span class="mbox"><span class="fx" aria-hidden="true">${(m.fk || []).map((f) => html`<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>`)}</span><span class="poe ${m.sw}">${m.name}</span><span class="real" aria-hidden="true">${m.gen}</span></span><span class="gen" aria-hidden="true">${m.gen}</span></a>
`)}
</nav>
</header>
<main style="flex: 1 1 auto; display: flex; flex-direction: column; padding: 0 0 60px">
<div class="viewport" aria-label="a wall of inspirations: drag or use two fingers to move, pinch to zoom">
<div class="wall">
${(v.pieces || []).map((p) => html`<figure class="piece" style="left: ${p.x}px; top: ${p.y}px; width: ${p.w}px; transform: rotate(${p.r}deg); z-index: ${p.z}" tabindex="0" aria-label=${p.aria}><img src=${p.image} alt=${p.name} draggable="false" /><figcaption class="pcard"><span class="pn">${p.name}</span><span class="pm2">${p.meta}</span>${(p.line) ? html`<span class="pl2">${p.line}</span>` : null}</figcaption></figure>`)}
</div>
<span class="hint">drag · pinch to zoom</span>
</div>
</main>
</div>
`;
}
function tplStrip(v) {
  return null;
}
class Component extends DCLogic {
  rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  flecks(seed, density) {
    const rnd = this.rng(seed);
    const R = (a, b) => a + rnd() * (b - a);
    const g = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;
    const gold = ['#D6B25E', '#E3C47E', '#C9A04F', '#B8913F', '#EED39A'];
    const p = () => Math.round(R(30, 70)) + '%';
    const odd = () => p() + ' ' + p() + ' ' + p() + ' ' + p() + ' / ' + p() + ' ' + p() + ' ' + p() + ' ' + p();
    const out = [];
    const add = (x, y, w, h, r, o, br, b) => {
      if (x < 0 || x > 100 || y < 0 || y > 100) return;
      out.push({ x: x.toFixed(2), y: y.toFixed(2), w: w.toFixed(1), h: h.toFixed(1), r: Math.round(r), o: o.toFixed(2), br: br, b: b.toFixed(2), c: gold[Math.floor(rnd() * gold.length)] });
    };
    const fleck = (x, y, vein) => {
      const t = rnd();
      const blur = rnd() < 0.4 ? R(0.2, 0.7) : 0;
      if (t < 0.45) { const s = R(1, 2.4); add(x, y, s, s, 0, R(0.55, 1), '50%', blur); }
      else if (t < 0.72) add(x, y, R(2.2, 5), R(1.1, 2.6), R(0, 180), R(0.55, 1), odd(), blur);
      else if (t < 0.9) add(x, y, R(5, 16), R(0.8, 1.5), vein + R(-18, 18), R(0.5, 0.95), '45%', blur);
      else add(x, y, R(3.5, 7), R(2.5, 5.5), R(0, 180), R(0.7, 1), odd(), blur);
    };
    const k = Math.max(1, Math.round(R(2, 4.5) * density));
    for (let c = 0; c < k; c++) {
      const cx = R(4, 96), cy = R(6, 94), sx = R(3, 13), sy = R(4, 16), vein = R(0, 180);
      const n = Math.round(R(4, 11) * density);
      for (let i = 0; i < n; i++) fleck(cx + g() * sx, cy + g() * sy, vein);
      const m = Math.round(R(6, 16) * density);
      for (let i = 0; i < m; i++) add(cx + g() * sx * 1.8, cy + g() * sy * 1.8, 1, 1, 0, R(0.2, 0.45), '50%', 0);
    }
    const loners = Math.round(R(1, 5) * density);
    for (let i = 0; i < loners; i++) fleck(R(0, 100), R(0, 100), R(0, 180));
    return out;
  }
  menuDefs() {
    return (CONTENT.settings && CONTENT.settings.menu || []).map((d) => ({ gen: d.label, names: d.names && d.names.length ? d.names : [d.label], href: d.link || '#', here: d.label === 'inspirations' }));
  }
  cropBg(w, tint) {
    const cx = Math.round(Math.random() * 100), cy = Math.round(Math.random() * 100);
    if (w.cov) return 'none';
    const deg = Math.round(Math.random() * 360);
    return 'radial-gradient(circle at ' + cx + '% ' + cy + '%, #E3C47E 0 9%, transparent 32%), conic-gradient(from ' + deg + 'deg at 38% 62%, ' + tint + ', #2E4A8C, #E9DDBE, #3E5560, ' + tint + ')';
  }
  componentDidMount() {
    import('./wall.js').then((m) => { if (this._gone) return; this._wall = m.attachWall(this.base && this.base.querySelector('.viewport')); });
    let reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    if (reduce) return;
    this._t = setInterval(() => {
      if ((this.props.menuRotation ?? 'slowly') !== 'slowly' || this._hold || !this._mi) return;
      const d = this.menuDefs();
      const k = Math.floor(Math.random() * d.length);
      this._mi[k] = (this._mi[k] + 1) % d[k].names.length;
      this._mf[k] = 1 - this._mf[k];
      this.forceUpdate();
    }, 4200);
  }
  componentWillUnmount() {
    this._gone = true;
    if (this._wall) this._wall();
    if (this._t) clearInterval(this._t);
  }
  renderVals() {
    if (!this._seed) this._seed = Math.floor(Math.random() * 1e9);
    const defs = this.menuDefs();
    if (!this._mi) { this._mi = defs.map((d) => Math.floor(Math.random() * d.names.length)); this._mf = defs.map(() => 0); this._mfk = defs.map((d, k) => this.flecks(this._seed + 5000 + k * 7, 0.55)); }
    const menu = defs.map((d, k) => ({
      name: d.names[this._mi[k]],
      gen: d.gen,
      href: d.href,
      sw: 'sw' + this._mf[k],
      current: d.here ? 'page' : 'false',
      aria: d.names[this._mi[k]] + ' (' + d.gen + ')',
      fk: this._mfk[k]
    }));
    if (!this._pos) {
      const R = (a, b) => a + Math.random() * (b - a);
      const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
      const centre = shuffle([[820, 380], [1220, 300], [980, 760], [1420, 700], [700, 820], [1600, 420]]);
      const outer = [];
      for (let gx = 0; gx < 6; gx++) for (let gy = 0; gy < 4; gy++) outer.push([120 + gx * 410, 80 + gy * 400]);
      const slots = centre.concat(shuffle(outer));
      const W = { small: 300, medium: 340, large: 440 };
      const list = (CONTENT.inspirations || []).filter((p) => !p.hidden && p.image);
      this._pos = list.map((p, k) => { const sl = slots[k % slots.length]; return {
        x: Math.round(sl[0] + R(-60, 60)), y: Math.round(sl[1] + R(-50, 50)), r: R(-7, 7).toFixed(1), z: k + 1,
        w: W[p.size] || 340, image: p.image, name: p.name || '', meta: p.description || '', line: p.line || '',
        aria: (p.name || '') + (p.description ? ', ' + p.description : '') }; });
      this._ox = -560; this._oy = -220;
    }
    return {
      fkFoot: this._fkFoot || (this._fkFoot = this.flecks(Math.floor(Math.random() * 1e9), 1.6)),
      pieces: this._pos,
      ox: this._ox, oy: this._oy,
      down: (e) => { this._drag = { x: e.clientX, y: e.clientY, ox: this._ox, oy: this._oy }; try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {} },
      move: (e) => {
        if (!this._drag) return;
        const vp = e.currentTarget, W = 2600, H = 1700;
        this._ox = Math.min(0, Math.max(vp.clientWidth - W, this._drag.ox + e.clientX - this._drag.x));
        this._oy = Math.min(0, Math.max(vp.clientHeight - H, this._drag.oy + e.clientY - this._drag.y));
        const w = vp.querySelector('.wall'); if (w) w.style.transform = 'translate(' + this._ox + 'px, ' + this._oy + 'px)';
      },
      up: () => { this._drag = null; },
      menu: menu,
      holdOn: () => { this._hold = true; },
      holdOff: () => { this._hold = false; }
    };
  }
}

export const files = ["inspirations", "settings"];
const defaults = {"menuRotation": "slowly"};
export async function mount(el) {
  await loadContent(files);
  render(html`<${Component} ...${pageProps(defaults)} part="page" />`, el);
  return () => render(null, el);
}
