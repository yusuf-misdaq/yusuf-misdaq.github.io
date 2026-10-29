// shared page chrome for hand-built pages: lapis flecks, the header (name box + rotating menu) and the footer.
import { html, Component } from './vendor/preact-htm.js';

export function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// the generated lapis: clustered veins of gold specks, oblongs, streaks and nuggets, plus faint dust
export function flecks(seed, density) {
  const rnd = rng(seed);
  const R = (a, b) => a + rnd() * (b - a);
  const g = () => (rnd() + rnd() + rnd() - 1.5) / 1.5;
  const gold = ['#D6B25E', '#E3C47E', '#C9A04F', '#B8913F', '#EED39A'];
  const p = () => Math.round(R(30, 70)) + '%';
  const odd = () => p() + ' ' + p() + ' ' + p() + ' ' + p() + ' / ' + p() + ' ' + p() + ' ' + p() + ' ' + p();
  const out = [];
  const add = (x, y, w, h, r, o, br, b) => {
    if (x < 0 || x > 100 || y < 0 || y > 100) return;
    out.push({ x: x.toFixed(2), y: y.toFixed(2), w: w.toFixed(1), h: h.toFixed(1), r: Math.round(r), o: o.toFixed(2), br, b: b.toFixed(2), c: gold[Math.floor(rnd() * gold.length)] });
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

export function Flecks({ list, recolor }) {
  return html`<span class="fx" aria-hidden="true">${list.map((f) => html`<i class="fk" style=${`left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${recolor || f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)`}></i>`)}</span>`;
}

const seed0 = Math.floor(Math.random() * 1e9);
let fleckCache = {};
export function cachedFlecks(key, density) {
  if (!fleckCache[key]) { let h = seed0; for (let i = 0; i < key.length; i++) h = (Math.imul(h, 31) + key.charCodeAt(i)) | 0; fleckCache[key] = flecks(h, density); }
  return fleckCache[key];
}

// header: gold name box + the six lapis menu boxes whose poetic names rotate slowly (paused while the pointer is over them)
export class Header extends Component {
  constructor(p) {
    super(p);
    const defs = this.defs();
    this.state = { mi: defs.map((d) => Math.floor(Math.random() * d.names.length)), mf: defs.map(() => 0) };
  }
  defs() {
    return ((window.CONTENT.settings && window.CONTENT.settings.menu) || []).map((d) => ({ gen: d.label, names: d.names && d.names.length ? d.names : [d.label], href: d.link || '#' }));
  }
  componentDidMount() {
    let reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    if (reduce) return;
    this._t = setInterval(() => {
      if (this._hold) return;
      const d = this.defs(), k = Math.floor(Math.random() * d.length);
      const mi = this.state.mi.slice(), mf = this.state.mf.slice();
      mi[k] = (mi[k] + 1) % d[k].names.length; mf[k] = 1 - mf[k];
      this.setState({ mi, mf });
    }, 4200);
  }
  componentWillUnmount() { clearInterval(this._t); }
  render({ here }) {
    const defs = this.defs();
    return html`<header class="hdr" style="max-width: 1216px; width: 100%; margin: 0 auto; box-sizing: border-box">
      <a href="index.html" class="namebox inter" aria-label="yusuf misdaq, home">yusuf<br />misdaq</a>
      <nav class="menu" aria-label="main" onMouseEnter=${() => { this._hold = true; }} onMouseLeave=${() => { this._hold = false; }}>
        ${defs.map((d, k) => { const name = d.names[this.state.mi[k] % d.names.length]; return html`
          <a href=${d.href} class="mi" aria-current=${d.gen === here ? 'page' : 'false'} aria-label=${name + ' (' + d.gen + ')'}>
            <span class="mbox"><${Flecks} list=${cachedFlecks('menu' + k, 0.55)} /><span class=${'poe sw' + this.state.mf[k]}>${name}</span><span class="real" aria-hidden="true">${d.gen}</span></span>
            <span class="gen" aria-hidden="true">${d.gen}</span>
          </a>`; })}
      </nav>
    </header>`;
  }
}

export function Footer() {
  const L = window.FOOT_LINKS || {};
  return html`<footer class="foot lapis"><${Flecks} list=${cachedFlecks('foot', 1.6)} />
    <p class="above fcall">.you are here for a reason.</p>
    <nav class="above flinks" aria-label="elsewhere" style="justify-content: center"><a href=${L.bandcamp || '#'}>bandcamp</a><a href=${L.instagram || '#'}>instagram</a><a href=${L.contact || '#'}>contact</a></nav>
  </footer>`;
}
