// generated from the design canvas board; edit content in /content, not here.
import { html, render, Component as PreactComponent } from './vendor/preact-htm.js';
import { loadContent, pageProps } from './site.js';

class DCLogic extends PreactComponent {
  constructor(p) { super(p); this.state = {}; }
  render() { const v = Object.assign({ SITE: window.CONTENT, FOOT: window.FOOT_LINKS || {} }, this.renderVals()); return tpl(v); }
}

function tpl(v) {
  return html`
<div class="at" style="--ground: ${v.ground}; --ink: ${v.ink}; background: var(--ground); color: var(--ink); min-height: 100vh; display: flex; flex-direction: column">
<div style="max-width: 1280px; margin: 0 auto; padding: 0 32px; flex: 1 0 auto; width: 100%; box-sizing: border-box">

<header class="hdr">
<a href="index.html" class="namebox inter" aria-label="yusuf misdaq, home">yusuf<br />misdaq</a>
<nav class="menu" aria-label="main" onMouseEnter=${v.holdOn} onMouseLeave=${v.holdOff}>
${(v.menu || []).map((m) => html`
<a href=${m.href} class="mi" aria-current=${m.current} aria-label=${m.aria}><span class="mbox"><span class="fx" aria-hidden="true">${(m.fk || []).map((f) => html`<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>`)}</span><span class="poe ${m.sw}">${m.name}</span></span><span class="gen" aria-hidden="true">${m.gen}</span></a>
`)}
</nav>
</header>

<section class="lapis" aria-label="section poster" style="padding: 40px 44px 44px; color: #F4EBD6; border-radius: 2px">
<div class="fx" aria-hidden="true">
${(v.fk1 || []).map((f) => html`
<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>
`)}
</div>
<div class="above">
<h1 class="inter pl" style="margin: 0; font-size: clamp(56px, 10vw, 150px)">${v.line1}</h1>
<p class="inter pl" style="margin: 14px 0 0; font-size: clamp(30px, 5.6vw, 84px)">${v.line2}</p>
</div>
</section>

<div class="mono" style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 4px 40px; margin-top: 22px">
<nav class="flt" aria-label="filter by form">
${(v.cats || []).map((c) => html`
<button class="tx ${c.on}" onClick=${c.pick} aria-pressed=${c.pressed}>${c.label}</button>
`)}
</nav>
<nav class="flt" aria-label="order">
${(v.sorts || []).map((c) => html`
<button class="tx ${c.on}" onClick=${c.pick} aria-pressed=${c.pressed}>${c.label}</button>
`)}
</nav>
</div>

<div class="totem ${v.tidyCls}">
<svg width="0" height="0" style="position: absolute" aria-hidden="true" focusable="false"><defs><filter id="boil" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="1" result="n"><animate attributeName="seed" values="1;5;9;3" dur="0.44s" calcMode="discrete" repeatCount="indefinite"></animate></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter><filter id="boilHard" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="turbulence" baseFrequency="0.06" numOctaves="2" seed="2" result="n2"><animate attributeName="seed" values="2;8;4;11;6" dur="0.5s" calcMode="discrete" repeatCount="indefinite"></animate></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n2" scale="6" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter><clipPath id="planetClip"><circle cx="60" cy="60" r="36"></circle></clipPath><clipPath id="mtnClip"><rect x="0" y="0" width="120" height="100"></rect></clipPath></defs></svg>
${(v.cards || []).map((it) => html`
<div class="slot" style="margin-top: ${it.gap}px">
${(it.hasG) ? html`
<div class="gwrap ${it.gmode}" aria-hidden="true" style="--gf: ${it.gf}; margin-bottom: ${it.gBot}px">
${(it.g_planet) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><circle class="inkf" cx="60" cy="60" r="36"></circle><g class="clipP"><g class="drift"><path d="M30 44 q8 -8 16 -2 q6 6 -2 12 q-8 4 -14 -2 q-4 -4 0 -8z" fill="#D6B25E"></path><path d="M52 66 q10 -4 14 4 q2 8 -6 12 q-8 2 -10 -6 q-2 -6 2 -10z" fill="#C9A04F"></path><path d="M74 38 q6 -2 8 4 q0 6 -6 6 q-5 -2 -2 -10z" fill="#E3C47E"></path><path d="M34 80 q6 -2 8 2 q0 4 -6 4z" fill="#D6B25E"></path><g transform="translate(72 0)"><path d="M30 44 q8 -8 16 -2 q6 6 -2 12 q-8 4 -14 -2 q-4 -4 0 -8z" fill="#D6B25E"></path><path d="M52 66 q10 -4 14 4 q2 8 -6 12 q-8 2 -10 -6 q-2 -6 2 -10z" fill="#C9A04F"></path><path d="M74 38 q6 -2 8 4 q0 6 -6 6 q-5 -2 -2 -10z" fill="#E3C47E"></path><path d="M34 80 q6 -2 8 2 q0 4 -6 4z" fill="#D6B25E"></path></g></g></g><circle class="ln" cx="60" cy="60" r="36" style="stroke-width: 3"></circle><g class="spin-fast"><circle cx="60" cy="12" r="3" fill="#E3C47E"></circle></g></svg>
` : null}
${(it.g_moonThin) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><g class="slow4"><circle class="inkf" cx="60" cy="60" r="34"></circle><circle class="gndf" cx="69" cy="55" r="33"></circle></g></svg>
` : null}
${(it.g_orbit) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><circle class="ln" cx="60" cy="60" r="30"></circle><g class="orb1"><circle class="goldf" cx="60" cy="30" r="4.2"></circle></g><g class="orb2"><circle class="gold2" cx="60" cy="37" r="3"></circle></g><g class="orb3"><circle class="gold3" cx="60" cy="19" r="3.6"></circle></g></svg>
` : null}
${(it.g_egg) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><circle class="ln" cx="60" cy="60" r="34"></circle><g class="buzz"><path class="goldf" d="M60.4 43.6 C 69.8 43.2 76.9 50.6 76.3 60.4 C 75.8 69.6 69.1 76.6 59.5 76.2 C 50.6 75.9 43.6 68.8 43.9 59.3 C 44.3 50.4 51.1 44 60.4 43.6Z"></path></g></svg>
` : null}
${(it.g_seek) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><circle class="ln" cx="60" cy="60" r="34"></circle><circle class="travel gold2" cx="60" cy="26" r="4"></circle><g class="jit"><path class="goldf" d="M60.4 43.6 C 69.8 43.2 76.9 50.6 76.3 60.4 C 75.8 69.6 69.1 76.6 59.5 76.2 C 50.6 75.9 43.6 68.8 43.9 59.3 C 44.3 50.4 51.1 44 60.4 43.6Z"></path></g></svg>
` : null}
${(it.g_arc) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><g class="spin-step"><circle class="ln ring75" cx="60" cy="60" r="30"></circle></g></svg>
` : null}
${(it.g_wave) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><path class="ln fr fr1" d="M10 96 C 30 96 40 70 62 68 C 84 66 96 82 108 96"></path><path class="ln fr fr2" d="M10 96 C 28 96 36 52 64 48 C 88 46 98 62 92 74 C 88 66 80 64 76 70"></path><path class="ln fr fr3" d="M10 96 C 30 96 40 60 62 56 C 84 54 96 70 90 90 C 84 80 76 80 72 88"></path><path class="ln fr fr4" d="M10 96 C 36 92 56 86 72 88 C 88 90 98 94 110 96 M74 80 L70 70 M84 82 L88 72 M94 86 L102 80"></path><path class="ln thin" d="M8 104 L112 104"></path></svg>
` : null}
${(it.g_mountain) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><g class="clipM"><g class="rise"><circle class="goldf" cx="74" cy="34" r="15"></circle></g></g><path class="inkf" d="M6 100 L42 50 L54 64 L74 38 L114 100 Z"></path><path class="ln thin" d="M4 100 L116 100"></path></svg>
` : null}
${(it.g_afghan) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><g class="slow4"><path class="ln thin" d="M13.0 45.1 L20.3 48.4 L25.6 47.2 L27.1 43.3 L32.7 42.0 L36.7 39.5 L38.2 32.6 L44.1 30.9 L45.2 27.9 L48.6 30.2 L50.7 30.5 L54.7 30.5 L60.0 32.4 L62.2 33.4 L67.3 30.6 L69.7 32.3 L72.0 28.3 L76.2 28.5 L77.3 27.2 L78.1 23.8 L81.1 20.8 L85.0 22.8 L84.2 25.4 L86.3 25.8 L85.7 33.0 L88.4 35.8 L90.9 34.0 L94.1 33.1 L98.5 29.3 L103.4 30.0 L110.7 30.0 L112.0 32.4 L107.9 33.4 L104.3 34.9 L96.1 36.0 L88.5 37.8 L84.3 41.5 L86.0 45.1 L86.8 49.4 L83.3 53.0 L83.6 56.2 L81.6 59.3 L74.9 59.1 L77.7 64.7 L73.2 66.8 L70.1 72.1 L70.6 77.2 L67.8 79.6 L65.2 78.8 L59.7 79.9 L58.9 82.3 L53.7 82.3 L49.7 87.1 L49.5 94.4 L40.3 98.0 L35.3 97.2 L33.9 99.1 L29.6 98.0 L22.5 99.3 L10.6 94.9 L17.1 87.1 L16.5 81.6 L11.1 80.2 L10.6 74.8 L8.3 68.0 L11.3 63.3 L8.2 62.0 L10.1 55.8Z"></path></g></svg>
` : null}
${(it.g_allah) ? html`
<svg class="glyph boil" viewBox="0 0 120 120" width="130" height="130"><g class="slow4"><text class="allah" x="60" y="76">الله</text></g></svg>
` : null}
</div>
` : null}
<div style="margin-left: calc((100% - 340px) * ${it.f}); width: 340px; max-width: 100%">
<a class="card" href=${it.href} aria-label=${it.aria} style="--r: ${it.rot}deg; animation-delay: ${it.delay}ms">
${(it.speck) ? html`
<span class="fx" aria-hidden="true">
${(it.fk || []).map((f) => html`
<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>
`)}
</span>
` : null}
<span class="ct above">${it.t}</span>
<span class="cm above">${it.meta}</span>
<span class="cl above">${it.line}</span>
<span class="peek ${it.side}" aria-hidden="true"><span class="thing v-${it.v} ${it.cov}" style="--cover: ${it.coverCss}; --tint: ${it.tint}; --bg: ${it.bg}; --bpos: ${it.bpos}; --bsize: ${it.bsize}; --sz: ${it.sz}px; --cf: ${it.cf}deg; --keep: ${it.keep}%; transform: rotate(${it.prot}deg)"><span class="lbl">${it.t}</span></span></span>
</a>
</div>
</div>
`)}
</div>

<div style="height: 40px"></div>

</div>
<footer class="foot lapis">
<span class="fx" aria-hidden="true">${(v.fkFoot || []).map((f) => html`<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>`)}</span>
<p class="above fcall">.you are here for a reason.</p>
<nav class="above flinks" aria-label="elsewhere" style="justify-content: center"><a href=${v.FOOT.bandcamp}>bandcamp</a><a href=${v.FOOT.instagram}>instagram</a><a href=${v.FOOT.contact}>contact</a></nav>
</footer>
</div>
`;
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
    return (CONTENT.settings && CONTENT.settings.menu || []).map((d) => ({ gen: d.label, names: d.names && d.names.length ? d.names : [d.label], href: d.link || '#', here: d.label === 'selected works' }));
  }
  cropBg(w, tint) {
    const cx = Math.round(Math.random() * 100), cy = Math.round(Math.random() * 100);
    if (w.cover) return 'none';
    const deg = Math.round(Math.random() * 360);
    return 'radial-gradient(circle at ' + cx + '% ' + cy + '%, #E3C47E 0 9%, transparent 32%), conic-gradient(from ' + deg + 'deg at 38% 62%, ' + tint + ', #2E4A8C, #E9DDBE, #3E5560, ' + tint + ')';
  }
  watchGlyphs() {
    if (!this._io) return;
    try {
      document.querySelectorAll('.gwrap').forEach((el) => {
        if (!el.hasAttribute('data-watched')) { el.setAttribute('data-watched', '1'); this._io.observe(el); }
      });
    } catch (e) {}
  }
  componentDidUpdate() {
    this.watchGlyphs();
  }
  componentDidMount() {
    try {
      if (typeof IntersectionObserver !== 'undefined') {
        this._io = new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) en.target.removeAttribute('data-off');
            else en.target.setAttribute('data-off', '1');
          });
        }, { rootMargin: '200px 0px' });
        this.watchGlyphs();
      }
    } catch (e) {}
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
    if (this._t) clearInterval(this._t);
    if (this._io) this._io.disconnect();
  }
  works() {
    return (CONTENT.works || []).filter((w) => !w.hidden && w.title).map((w) => ({ t: w.title, cat: w.form || 'music', y: w.year ? +w.year : null, meta: (w.details || '').replace(/\s+[-–|]\s+/g, ' · '), line: w.line || '', cover: w.cover || '', href: w.slug ? 'work.html?w=' + encodeURIComponent(w.slug) : '#' }));
  }
  makeBase() {
    const V = {
      music: ['crop'],
      film: ['reel', 'canister'],
      novel: ['notebook'],
      poetry: ['notebook'],
      painting: ['canvas', 'frame'],
      sculpture: ['clay', 'vessel'],
      spaces: ['rug', 'cushion']
    };
    const T = ['#A9583A', '#7A3E3E', '#5F6B4E', '#8E6B2E', '#2E4A8C', '#6B5A3A', '#9B5A55', '#3E5560'];
    const list = this.works().map((w, i) => {
      const pool = V[w.cat];
      return Object.assign({}, w, {
        i: i,
        v: pool[Math.floor(Math.random() * pool.length)],
        tint: T[i % T.length],
        prot: (Math.random() * 14 - 7).toFixed(1),
        bg: this.cropBg(w, T[i % T.length]),
        cov: w.cover ? 'cov' : '',
        coverCss: w.cover ? 'url(' + w.cover + ')' : 'none',
        sz: Math.round(140 * Math.pow(0.75, Math.floor(Math.random() * 4))),
        cf: Math.round(Math.random() * 360),
        keep: (53 + Math.random() * 46).toFixed(1),
        bpos: Math.round(15 + Math.random() * 70) + '% ' + Math.round(15 + Math.random() * 70) + '%',
        bsize: Math.round(260 + Math.random() * 140) + '%',
        aria: w.t + ', ' + w.meta
      });
    });
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = list[i]; list[i] = list[j]; list[j] = tmp;
    }
    this._seed = Math.floor(Math.random() * 1e9);
    return list;
  }
  column(items, key, speck, tidy) {
    if (this._colKey === key) return this._col;
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (Math.imul(h, 31) + key.charCodeAt(i)) | 0;
    const rnd = this.rng(h);
    const W = 1216, CW = 340, GW = 130;
    const pool = ['planet', 'moonThin', 'orbit', 'egg', 'seek', 'arc', 'wave', 'mountain', 'afghan', 'allah'];
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp; }
    let gi = 0;
    let f = rnd();
    const col = items.map((it, n) => {
      if (tidy) return Object.assign({}, it, {
        f: '0.500', gap: n === 0 ? 0 : 28, rot: '0', hasG: false, gmode: '', gf: '0', gBot: 0,
        delay: Math.min(n * 30, 900), side: 'peek-r', speck: speck,
        fk: speck ? this.flecks(this._seed + it.i * 101, 0.55) : []
      });
      let nf = rnd();
      for (let tries = 0; tries < 6 && Math.abs(nf - f) < 0.25; tries++) nf = rnd();
      f = nf;
      const big = n > 0 && rnd() < 0.12;
      let gap = big ? 220 + rnd() * 260 : 12 + rnd() * 60;
      const wild = rnd() < 0.22;
      const rot = wild ? (rnd() < 0.5 ? -1 : 1) * (4.5 + rnd() * 5) : (rnd() - 0.5) * 5;
      let gmode = '', gf = 0, gBot = 0;
      if (big && rnd() < 0.8) {
        gmode = 'g-gap';
        const top = Math.round(gap * (0.2 + rnd() * 0.25));
        gBot = Math.max(28, Math.round(gap - top - GW));
        gap = top;
        gf = rnd();
      } else if (!big && rnd() < 0.1) {
        const L = (W - CW) * f, R = L + CW, peekRight = f < 0.5;
        const opts = [];
        const hi1 = L - (peekRight ? 40 : 250) - GW;
        const lo2 = R + (peekRight ? 250 : 40), hi2 = W - GW;
        if (hi1 >= 0) opts.push([0, hi1]);
        if (hi2 >= lo2) opts.push([lo2, hi2]);
        if (opts.length) {
          const o = opts[Math.floor(rnd() * opts.length)];
          gmode = 'g-side';
          gf = (o[0] + rnd() * (o[1] - o[0])) / (W - GW);
        }
      }
      const gname = gmode ? pool[gi++ % pool.length] : '';
      const out = Object.assign({}, it, {
        f: f.toFixed(3),
        gap: n === 0 ? 0 : Math.round(gap),
        rot: rot.toFixed(2),
        hasG: !!gmode,
        gmode: gmode,
        gf: gf.toFixed(3),
        gBot: gBot,
        delay: Math.min(n * 55, 1600),
        side: f < 0.5 ? 'peek-r' : 'peek-l',
        speck: speck,
        fk: speck ? this.flecks(this._seed + it.i * 101, 0.55) : []
      });
      for (let k = 0; k < pool.length; k++) out['g_' + pool[k]] = gname === pool[k];
      return out;
    });
    this._colKey = key;
    this._col = col;
    return col;
  }
  renderVals() {
    if (!this._base) this._base = this.makeBase();
    const s = this.state || {};
    const cat = s.cat || 'all';
    const sort = s.sort || 'random';
    const ink = this.props.ink ?? '#1E2B55';
    const ground = this.props.ground ?? '#F4EBD6';
    const speckle = this.props.speckle ?? 'medium';
    const cardSpeckle = !!(this.props.cardSpeckle ?? true);
    const dens = speckle === 'light' ? 0.55 : speckle === 'rich' ? 1.6 : 1;
    const fkey = this._seed + '|' + speckle;
    if (this._fkey !== fkey) {
      this._fkey = fkey;
      this._fk1 = this.flecks(this._seed + 11, dens);
      this._fk2 = this.flecks(this._seed + 977, dens);
    }
    let items = cat === 'all' ? this._base.slice() : this._base.filter((w) => w.cat === cat);
    if (sort !== 'random') {
      const dir = sort === 'oldest' ? 1 : -1;
      items.sort((a, b) => {
        if (a.y == null && b.y == null) return 0;
        if (a.y == null) return 1;
        if (b.y == null) return -1;
        return dir * (a.y - b.y);
      });
    }
    const forms = ['all', 'music', 'film', 'novel', 'poetry', 'painting', 'sculpture', 'spaces'];
    const cats = forms.map((c) => ({
      label: c,
      on: c === cat ? 'tx-on' : '',
      pressed: c === cat ? 'true' : 'false',
      pick: () => this.setState({ cat: c })
    }));
    const sorts = ['random', 'newest', 'oldest', 'order'].map((c) => ({
      label: c,
      on: c === sort ? 'tx-on' : '',
      pressed: c === sort ? 'true' : 'false',
      pick: () => {
        if (c === 'random' && sort === 'random') { this._base = this.makeBase(); this._colKey = null; this.setState({ k: (s.k || 0) + 1 }); }
        else this.setState({ sort: c });
      }
    }));
    const n = items.length;
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
    return {
      fkFoot: this._fkFoot || (this._fkFoot = this.flecks(Math.floor(Math.random() * 1e9), 1.6)),
      menu: menu,
      holdOn: () => { this._hold = true; },
      holdOff: () => { this._hold = false; },
      ink: ink,
      ground: ground,
      fk1: this._fk1,
      fk2: this._fk2,
      cats: cats,
      sorts: sorts,
      cards: this.column(items, this._seed + '|' + cat + '|' + sort + '|' + cardSpeckle, cardSpeckle, sort === 'order'),
      tidyCls: sort === 'order' ? 'tidy' : '',
      line1: cat === 'all' ? 'selected works' : cat,
      line2: String(n),
      posterCollage: (this.props.posterPhoto ?? 'collage') === 'collage',
      posterPainting: (this.props.posterPhoto ?? 'collage') === 'painting',
      noSubmit: (e) => { if (e && e.preventDefault) e.preventDefault(); }
    };
  }
}
await loadContent(["works", "settings"]);
render(html`<${Component} ...${pageProps({"ground": "#F4EBD6", "ink": "#1E2B55", "speckle": "medium", "cardSpeckle": true, "posterPhoto": "painting", "menuRotation": "slowly"})} />`, document.getElementById('app'));
