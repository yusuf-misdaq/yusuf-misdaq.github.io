// generated from the design canvas board; edit content in /content, not here.
import { html, render, Component as PreactComponent } from './vendor/preact-htm.js';
import { loadContent, pageProps } from './site.js';

class DCLogic extends PreactComponent {
  constructor(p) { super(p); this.state = {}; }
  render() { const v = Object.assign({ SITE: window.CONTENT, FOOT: window.FOOT_LINKS || {} }, this.renderVals()); return tpl(v); }
}

function tpl(v) {
  return html`
<div style="background: #F4EBD6; color: #1E2B55; min-height: 100vh; display: flex; flex-direction: column">
<a class="namelink lapis ${v.ph1}" style="--bp: ${v.bp1}; --dim: .22" href="works.html" aria-label="yusuf misdaq — enter the site">
<span class="fx" aria-hidden="true">
${(v.fk1 || []).map((f) => html`
<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>
`)}
</span>
<span class="above"><span class="nm" style="display: block">yusuf misdaq</span><span class="tag">welcome to the website of the artist you know</span><span class="enter">enter</span></span>
</a>
<div style="max-width: 1100px; margin: 0 auto; padding: 0 32px 0; flex: 1 0 auto; width: 100%; box-sizing: border-box">



<svg width="0" height="0" style="position: absolute" aria-hidden="true" focusable="false"><defs><filter id="rayboil" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="1" result="n"><animate attributeName="seed" values="1;5;9;3" dur="0.44s" calcMode="discrete" repeatCount="indefinite"></animate></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter><filter id="raypix" filterUnits="userSpaceOnUse" x="0" y="0" width="70" height="100"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="1" result="n"><animate attributeName="seed" values="1;5;9;3" dur="0.44s" calcMode="discrete" repeatCount="indefinite"></animate></feTurbulence><feDisplacementMap in="SourceGraphic" in2="n" scale="4" xChannelSelector="R" yChannelSelector="G" result="b"></feDisplacementMap><feFlood x="3" y="3" width="1" height="1" flood-color="#000"></feFlood><feComposite width="7" height="7"></feComposite><feTile result="grid"></feTile><feComposite in="b" in2="grid" operator="in"></feComposite><feMorphology operator="dilate" radius="3.5"></feMorphology></filter></defs></svg>
<div class="stack" style="--r: ${v.rot}deg">
<h2 class="eod lapis"><span class="fx" aria-hidden="true">${(v.fk3 || []).map((f) => html`<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>`)}</span><span class="above">excerpt of the day:</span></h2>
<div class="sunwrap">
<svg class="rays rays-l" viewBox="0 0 70 100" width="112" height="160" aria-hidden="true"><line class="ray r1" x1="60" y1="28" x2="18" y2="6"></line><line class="ray r2" x1="58" y1="50" x2="8" y2="50"></line><line class="ray r3" x1="60" y1="72" x2="18" y2="94"></line></svg>
<svg class="rays rays-r" viewBox="0 0 70 100" width="112" height="160" aria-hidden="true"><line class="ray r2" x1="10" y1="28" x2="52" y2="6"></line><line class="ray r3" x1="12" y1="50" x2="62" y2="50"></line><line class="ray r1" x1="10" y1="72" x2="52" y2="94"></line></svg>
<a class="poem poemlink lapis ${v.ph3}" href="works.html" style="--bp: ${v.bp3}; --bs: ${v.bs3}; --dim: .42" aria-label="excerpt of the day: enter the site">
<span class="fx" aria-hidden="true">
${(v.fk2 || []).map((f) => html`
<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>
`)}
</span>
<div class="above">
<p class="pb">${v.text}</p>
<p class="pt">— ${v.title}</p>
<div class="pm"><span>${v.loc}</span></div>
</div>
</a>
</div>
</div>



</div>
<footer class="foot lapis">
<span class="fx" aria-hidden="true">${(v.fk4 || []).map((f) => html`<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>`)}</span>
<p class="above fcall">.you are here for a reason.</p>
<nav class="above flinks" aria-label="elsewhere" style="justify-content: center"><a href=${v.FOOT.bandcamp}>bandcamp</a><a href=${v.FOOT.instagram}>instagram</a><a href=${v.FOOT.contact}>contact</a></nav>
</footer>
<div class="strip lapis s-${v.stripColor}" role="region" aria-label="music and news">
<span class="fx" aria-hidden="true">${(v.fk5 || []).map((f) => html`<i class="fk" style="left: ${f.x}%; top: ${f.y}%; width: ${f.w}px; height: ${f.h}px; transform: translate(-50%, -50%) rotate(${f.r}deg); opacity: ${f.o}; background: ${f.c}; border-radius: ${f.br}; filter: blur(${f.b}px)"></i>`)}</span>
<div class="player above">
<button class="pp" type="button" onClick=${v.toggle} aria-label=${v.ppLabel}>
${(v.playing) ? html`<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><rect x="2.5" y="1.5" width="3.2" height="11" rx=".6" fill="currentColor"></rect><rect x="8.3" y="1.5" width="3.2" height="11" rx=".6" fill="currentColor"></rect></svg>` : null}
${(v.paused) ? html`<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.6 1.6 L12.2 7 L3.6 12.4 Z" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round"></path></svg>` : null}
</button>
<span class="pmeta"><span class="song" aria-label="now playing: ${v.song}"><span class="songin" aria-hidden="true">${v.song}<b class="dup"><i>·</i>${v.song}<i>·</i></b></span></span><input class="vol" type="range" min="0" max="100" step="1" value=${v.vol} onInput=${v.setVol} aria-label="volume" /></span>
</div>
<div class="tick above" aria-label="news and anniversaries">
<div class="track">
${(v.tix || []).map((t) => html`<span class="ti ${t.cls}"><b class="tl">${t.label}</b>${(t.link) ? html`<a class="tt" href=${t.href} target=${t.target} rel="noopener">${t.text}</a>` : null}${(t.plain) ? html`<span class="tt">${t.text}</span>` : null}</span>`)}
</div>
</div>
</div>
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
  ph(k) {
    if (!this._ph) {
      this._ph = [0, 1, 2].map(() => 'ph ph-' + (Math.random() < 0.5 ? 1 : 2) + (Math.random() < 0.5 ? ' ph-flip' : ''));
      this._ph[2] = 'ph ph-zoom ph-' + (Math.random() < 0.5 ? 1 : 2) + ' ' + ['', 'ph-flip', 'ph-mx', 'ph-my'][Math.floor(Math.random() * 4)];
      this._bs = Math.round(170 + Math.random() * 230) + '%';
      this._bp = [0, 1, 2].map(() => Math.round(Math.random() * 100) + '% ' + Math.round(Math.random() * 100) + '%');
    }
    return this._ph[k];
  }
  excerpts() {
    return (CONTENT.excerpts || []).map((e) => [e.text, e.title, e.location, e.poemId]);
  }
  // ---- bottom strip: player + ticker ----
  // songs: drop real mp3 paths in here (src). the strip loops through them.
  songs() {
    const s = (CONTENT.songs || []).filter((x) => x.file).map((x) => ({ title: x.title || '', src: x.file }));
    return s.length ? s : [{ title: 'songs coming soon', src: '' }];
  }
  // news: optional from/to (yyyy-mm-dd) to schedule an item; href may be a page or an outside link
  news() {
    const n = (CONTENT.news || []).filter((x) => !x.hidden && x.text).map((x) => ({ label: x.label || 'news', text: x.text, href: x.link || '', ext: /^https?:/.test(x.link || ''), from: x.start || '', to: x.end || '' }));
    const o = (CONTENT.opportunities || []).filter((x) => x.open && x.showInTicker).map((x) => ({ label: 'opportunity', text: x.tickerText || x.title, href: 'opportunities.html' }));
    return o.concat(n);
  }
  // people: b = born, d = died (yyyy-mm-dd, gregorian). s = sufi path (death day is their urs).
  // dates entered from memory; verify before launch.
  // people (cms "people" collection): name, line (his words, may be blank), born / passed as yyyy-mm-dd (negative year = BC),
  // group: true -> born = first album release, passed = last album release. bornNote / passedNote are appended to that date.
  people() {
    return (CONTENT.people || []).filter((p) => !p.hidden);
  }
  // releases (cms "releases" collection): artist, title, released yyyy-mm-dd, optional format ("single"), mine: true for his own albums,
  // recorded: true when only the recording date is known (wording becomes "recorded on"), note: appended text.
  // entries without a full date are kept but skipped by the ticker.
  releases() {
    return (CONTENT.releases || []).filter((r) => !r.hidden);
  }
  tickerDate() {
    const t = this.props.tickerDate ?? 'today';
    const now = new Date();
    if (t === 'today') return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const M = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const [mo, d] = t.split(' ');
    return new Date(now.getFullYear(), M.indexOf(mo), +d);
  }
  inkFlecks(list) {
    if (this._ink5 && this._ink5src === list) return this._ink5;
    const inks = ['#1E2B55', '#25336A', '#2E4A8C', '#1E2B55', '#3A4F8F'];
    this._ink5src = list;
    this._ink5 = list.map((f, i) => ({ ...f, c: inks[i % inks.length] }));
    return this._ink5;
  }
  // ---- moon: Meeus, Astronomical Algorithms ch. 49 (accurate to a minute or two) ----
  moonPhaseTime(k) {
    const r = Math.PI / 180, full = (k % 1) !== 0;
    const T = k / 1236.85, T2 = T * T, T3 = T2 * T, T4 = T3 * T;
    let jde = 2451550.09766 + 29.530588861 * k + 0.00015437 * T2 - 0.00000015 * T3 + 0.00000000073 * T4;
    const E = 1 - 0.002516 * T - 0.0000074 * T2;
    const M = (2.5534 + 29.1053567 * k - 0.0000014 * T2 - 0.00000011 * T3) * r;
    const Mp = (201.5643 + 385.81693528 * k + 0.0107582 * T2 + 0.00001238 * T3 - 0.000000058 * T4) * r;
    const F = (160.7108 + 390.67050284 * k - 0.0016118 * T2 - 0.00000227 * T3 + 0.000000011 * T4) * r;
    const O = (124.7746 - 1.56375588 * k + 0.0020672 * T2 + 0.00000215 * T3) * r;
    const s = Math.sin;
    const c = full ? [-0.40614, 0.17302, 0.01614, 0.01043, 0.00734, -0.00515, 0.00209] : [-0.4072, 0.17241, 0.01608, 0.01039, 0.00739, -0.00514, 0.00208];
    jde += c[0] * s(Mp) + c[1] * E * s(M) + c[2] * s(2 * Mp) + c[3] * s(2 * F) + c[4] * E * s(Mp - M) + c[5] * E * s(Mp + M) + c[6] * E * E * s(2 * M)
      - 0.00111 * s(Mp - 2 * F) - 0.00057 * s(Mp + 2 * F) + 0.00056 * E * s(2 * Mp + M) - 0.00042 * s(3 * Mp)
      + 0.00042 * E * s(M + 2 * F) + 0.00038 * E * s(M - 2 * F) - 0.00024 * E * s(2 * Mp - M) - 0.00017 * s(O)
      - 0.00007 * s(Mp + 2 * M) + 0.00004 * s(2 * Mp - 2 * F) + 0.00004 * s(3 * M) + 0.00003 * s(Mp + M - 2 * F)
      + 0.00003 * s(2 * Mp + 2 * F) - 0.00003 * s(Mp + M + 2 * F) + 0.00003 * s(Mp - M + 2 * F) - 0.00002 * s(Mp - M - 2 * F)
      - 0.00002 * s(3 * Mp + M) + 0.00002 * s(4 * Mp);
    const A = [299.77 + 0.107408 * k - 0.009173 * T2, 251.88 + 0.016321 * k, 251.83 + 26.651886 * k, 349.42 + 36.412478 * k, 84.66 + 18.206239 * k,
      141.74 + 53.303771 * k, 207.14 + 2.453732 * k, 154.84 + 7.30686 * k, 34.52 + 27.261239 * k, 207.19 + 0.121824 * k,
      291.34 + 1.844379 * k, 161.72 + 24.198154 * k, 239.56 + 25.513099 * k, 331.55 + 3.592518 * k];
    const W = [0.000325, 0.000165, 0.000164, 0.000126, 0.00011, 0.000062, 0.00006, 0.000056, 0.000047, 0.000042, 0.00004, 0.000037, 0.000035, 0.000023];
    A.forEach((a, i) => { jde += W[i] * s(a * r); });
    return new Date((jde - 2440587.5) * 864e5 - 70000); // terrestrial time -> UT (about 70 s in the 2020s)
  }
  // one ticker item: countdown from 7 days before a new or full moon, "tonight" on the day (visitor's local date)
  moonItem(today) {
    const dayNo = (d) => Math.round(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
    const t0 = dayNo(today);
    const yr = today.getFullYear() + today.getMonth() / 12 + today.getDate() / 365;
    const k0 = Math.floor((yr - 2000) * 12.3685) - 1;
    let best = null;
    for (let i = 0; i < 6; i++) {
      const k = k0 + i * 0.5;
      const days = dayNo(this.moonPhaseTime(k)) - t0;
      if (days >= 0 && days <= 7 && (!best || days < best.days)) best = { days, full: (k % 1) !== 0 };
    }
    if (!best) return null;
    const icon = best.full ? '\u{1F315}' : '\u{1F319}';
    if (best.days === 0) return { label: 'tonight', cls: 'tday', text: icon + ' ' + (best.full ? 'The moon is full!' : 'The moon is new'), tonight: true };
    const n = best.days === 1 ? '1 day' : best.days + ' days';
    return { label: icon, cls: 'tmoon', text: best.full ? n + ' before the full moon' : 'new moon in ' + n };
  }
  ticker() {
    const MON = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    const today = this.tickerDate();
    const y = today.getFullYear(), m = today.getMonth(), dd = today.getDate();
    const iso = (dt) => dt.getFullYear() + '-' + String(dt.getMonth() + 1).padStart(2, '0') + '-' + String(dt.getDate()).padStart(2, '0');
    const tIso = iso(today);
    const dow = today.getDay(); // 0 sun
    const toSun = (7 - dow) % 7;
    const when = (diff, mo) => {
      if (diff === 1) return 'tomorrow';
      if (diff <= toSun) return 'this week';
      if (diff <= toSun + 7) return 'next week';
      if (mo === m && diff < 31) return 'this month';
      return 'coming up in ' + MON[mo][0].toUpperCase() + MON[mo].slice(1, 3) + ':';
    };
    const now = [], ahead = [], earlier = [];
    for (const pp of this.people()) {
      for (const [kind, ds, note] of [['b', pp.born, pp.bornNote], ['d', pp.passed, pp.passedNote]]) {
        const mt = /^(-?\d+)-(\d+)-(\d+)$/.exec(ds || '');
        if (!mt) continue;
        const Y = +mt[1], Mo = +mt[2], D = +mt[3];
        const date = MON[Mo - 1][0].toUpperCase() + MON[Mo - 1].slice(1) + ' ' + D + ', ' + (Y < 0 ? (-Y) + ' BC' : Y);
        let next = new Date(y, Mo - 1, D);
        if (next < today) next = new Date(y + 1, Mo - 1, D);
        const diff = Math.round((next - today) / 864e5);
        const line = (pp.line || '').trim();
        const who = pp.name + (line ? ', ' + line.replace(/(?<!\.)[.,]\s*$/, '') : '') + ' — ';
        const verb = pp.group ? (kind === 'b' ? 'first album released on ' : 'last album released on ') : (kind === 'b' ? 'born on ' : 'passed on ');
        const tail = note ? ' ' + note : '';
        if (diff === 0) {
          now.push({ label: 'today', cls: 'tday', text: who + verb + 'this day, ' + date + tail });
        } else if (Mo - 1 === m && diff < 31) {
          ahead.push({ k: diff, label: when(diff, Mo - 1), text: who + verb + date + tail });
        } else {
          // beyond this month: short form, no date
          const short = pp.group ? (kind === 'b' ? 'first album anniversary of ' : 'last album anniversary of ') : (kind === 'b' ? 'birthday of ' : 'reunion anniversary of ');
          ahead.push({ k: diff, label: when(diff, Mo - 1), text: short + pp.name });
        }
      }
    }
    for (const r of this.releases()) {
      const mt = /^(\d+)-(\d+)-(\d+)$/.exec(r.released || '');
      if (!mt) continue;
      const Y = +mt[1], Mo = +mt[2], D = +mt[3];
      const date = MON[Mo - 1][0].toUpperCase() + MON[Mo - 1].slice(1) + ' ' + D + ', ' + Y;
      let next = new Date(y, Mo - 1, D);
      if (next < today) next = new Date(y + 1, Mo - 1, D);
      const diff = Math.round((next - today) / 864e5);
      const t = r.title + (r.format ? ' (' + r.format + ')' : '');
      const verb = r.recorded ? ' recorded ' : ' released ';
      const full = (on) => (r.mine ? 'Yusuf' + verb + t + ' ' + on : r.artist + ' — ' + t + verb + on) + (r.note ? ' ' + r.note : '');
      const ago = next.getFullYear() - Y;
      if (diff === 0) now.push({ label: 'today', cls: 'tday', text: full('on this day, ' + date + ' (' + ago + (ago === 1 ? ' year' : ' years') + ' ago)') });
      else if (Mo - 1 === m && diff < 31) ahead.push({ k: diff, label: when(diff, Mo - 1), text: full('on ' + date) });
      else ahead.push({ k: diff, label: when(diff, Mo - 1), text: r.mine ? 'release anniversary of Yusuf’s ' + r.title : 'release anniversary of ' + r.title + ' by ' + r.artist });
    }
    for (const mo of (CONTENT.moments || [])) {
      const mt = /^(\d+)-(\d+)-(\d+)$/.exec((mo && !mo.hidden && mo.date) || '');
      if (!mt || !mo.text) continue;
      const Y = +mt[1], Mo = +mt[2], D = +mt[3];
      const date = MON[Mo - 1][0].toUpperCase() + MON[Mo - 1].slice(1) + ' ' + D + ', ' + Y;
      let next = new Date(y, Mo - 1, D);
      if (next < today) next = new Date(y + 1, Mo - 1, D);
      const diff = Math.round((next - today) / 864e5);
      const words = mo.text.trim().replace(/(?<!\.)[.,]\s*$/, '');
      if (diff === 0) now.push({ label: 'today', cls: 'tday', text: words + ' — on this day, ' + date });
      else if (Mo - 1 === m && diff < 31) ahead.push({ k: diff, label: when(diff, Mo - 1), text: words + ' — ' + date });
    }
    ahead.sort((a, b) => a.k - b.k);
    earlier.sort((a, b) => a.k - b.k);
    // everything coming up within this month (or the next 14 days), then earlier this month; top up from further ahead if thin
    let soon = ahead.filter(x => x.k <= 14 || x.label === 'this month');
    let dates = soon.slice();
    if (dates.length < 6) dates = dates.concat(ahead.slice(soon.length, soon.length + 6 - dates.length));
    const news = this.news().filter(n => (!n.from || n.from <= tIso) && (!n.to || n.to >= tIso))
      .map(n => ({ label: n.label, text: n.text, href: n.href, target: n.ext ? '_blank' : '_self' }));
    const out = [...now];
    const moon = this.moonItem(today);
    if (moon) { if (moon.tonight) out.unshift(moon); else out.push(moon); }
    let ni = 0;
    if (news[ni]) out.push(news[ni++]);
    dates.forEach((x, i) => { out.push(x); if (i % 2 === 1 && news[ni]) out.push(news[ni++]); });
    while (news[ni]) out.push(news[ni++]);
    // session order: today/tonight stay first; everything else shuffled once per visit (same order on every page of that visit)
    const lead = out.filter(x => x.cls === 'tday' && (x.label === 'today' || x.label === 'tonight'));
    const rest = out.filter(x => !lead.includes(x));
    let seed = 0;
    try { seed = +sessionStorage.getItem('ym-ticker-seed') || 0; if (!seed) { seed = Math.floor(Math.random() * 1e9) + 1; sessionStorage.setItem('ym-ticker-seed', String(seed)); } } catch (e) {}
    if (!seed) seed = this._tseed || (this._tseed = Math.floor(Math.random() * 1e9) + 1);
    const rnd = this.rng(seed);
    for (let i = rest.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const tmp = rest[i]; rest[i] = rest[j]; rest[j] = tmp; }
    out.length = 0; out.push(...lead, ...rest);
    return out.map(x => ({ label: x.label, text: x.text, cls: x.cls || (/^(today|tomorrow|this week|next week|this month|opportunity)$/.test(x.label) ? 'tday' : ''), link: !!x.href, plain: !x.href, href: x.href || '#', target: x.target || '_self' }));
  }
  audio() {
    if (!this._a && typeof Audio !== 'undefined') {
      this._si = 0;
      this._a = new Audio();
      this._a.preload = 'none';
      this._a.volume = 0.7;
      this._a.addEventListener('ended', () => { this.nextSong(); });
    }
    return this._a;
  }
  nextSong() {
    const list = this.songs();
    this._si = (this._si + 1) % list.length;
    const a = this.audio();
    if (a && list[this._si].src) { a.src = list[this._si].src; a.play().catch(() => {}); }
    this.forceUpdate();
  }
  play() {
    const a = this.audio(), s = this.songs()[this._si || 0];
    if (a && s.src) { if (!a.src) a.src = s.src; a.play().catch(() => {}); }
    this.setState({ playing: true });
  }
  pause() {
    const a = this.audio();
    if (a) a.pause();
    this.setState({ playing: false });
  }
  // ticker + song title movement, driven by script (works even where css animation is off)
  startMotion() {
    // compositor-driven (web animations api): stays smooth when the page's main thread is busy
    let hover = false, held = false;
    const sync = () => { const a = this._ta; if (!a) return; (hover || held) ? a.pause() : a.play(); };
    const run = (el, key, dist, speed) => {
      const k = '_' + key;
      if (this[k] && this[k + 'el'] === el && Math.abs(this[k + 'd'] - dist) < 1) return;
      if (this[k]) this[k].cancel();
      this[k + 'el'] = el; this[k + 'd'] = dist;
      this[k] = el.animate([{ transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(' + (-dist).toFixed(1) + 'px,0,0)' }], { duration: dist / speed * 1000, iterations: Infinity });
    };
    const setup = () => {
      try {
        const t = document.querySelector('.strip .tick'), tr = document.querySelector('.strip .track');
        if (t && !t.dataset.bound) {
          t.dataset.bound = '1';
          t.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hover = true; sync(); } });
          t.addEventListener('pointerleave', () => { hover = false; sync(); });
          t.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse' && !(e.target.closest && e.target.closest('a'))) { held = !held; sync(); } });
        }
        if (tr && tr.animate) { const half = tr.scrollWidth / 2; if (half > 0) { run(tr, 'ta', half, 46); sync(); } }
        const sg = document.querySelector('.strip .songin'), box = document.querySelector('.strip .song');
        if (sg && box && sg.animate) {
          sg.removeAttribute('data-short');
          const d = sg.querySelector('.dup');
          const one = sg.scrollWidth - (d ? d.offsetWidth : 0);
          if (one > box.clientWidth + 2) run(sg, 'sa', sg.scrollWidth / 2, 18);
          else { sg.setAttribute('data-short', '1'); if (this._sa) { this._sa.cancel(); this._sa = null; this._sael = null; } }
        }
      } catch (e) {}
    };
    setup();
    this._mt = setInterval(setup, 1500); // catches font loading, resizes and re-renders
  }
  componentDidMount() {
    this.startMotion();
    this.scheduleTurn();
    // browsers only allow sound after the visitor's first gesture: start on the first tap, click or key
    this._first = (ev) => {
      ['pointerdown', 'keydown'].forEach(t => document.removeEventListener(t, this._first, true));
      if (ev && ev.target && ev.target.closest && ev.target.closest('.player')) return;
      if (!(this.state && this.state.playing)) this.play();
    };
    let touch = false;
    try { touch = window.matchMedia('(hover: none), (max-width: 760px)').matches; } catch (e) {}
    if (!touch) ['pointerdown', 'keydown'].forEach(t => document.addEventListener(t, this._first, true));
  }
  componentWillUnmount() {
    if (this._dayT) clearTimeout(this._dayT);
    if (this._mt) clearInterval(this._mt);
    if (this._ta) this._ta.cancel();
    if (this._sa) this._sa.cancel();
    if (this._first) ['pointerdown', 'keydown'].forEach(t => document.removeEventListener(t, this._first, true));
    if (this._a) this._a.pause();
  }
  stripVals() {
    const st = this.state || {};
    const playing = !!st.playing;
    const tix = this.ticker();
    const chars = tix.reduce((n, t) => n + t.label.length + t.text.length + 6, 0);
    const list = this.songs();
    return {
      playing, paused: !playing,
      ppLabel: playing ? 'pause music' : 'play music',
      toggle: () => { playing ? this.pause() : this.play(); },
      song: list[this._si || 0].title,
      vol: st.vol ?? 70,
      setVol: (ev) => { const v = +ev.target.value; const a = this.audio(); if (a) a.volume = v / 100; this.setState({ vol: v }); },
      tix: tix.concat(tix),
      stripColor: this.props.stripColor ?? 'pink',
      dur: Math.max(40, Math.round(chars * 0.16))
    };
  }
  // excerpt of the day: same for everyone on the same local date; the day turns at 3:33am local time.
  // each 459-day cycle walks through every excerpt once, in a fresh shuffled order per cycle.
  excerptOfDay() {
    const all = this.excerpts(), n = all.length;
    const t = new Date(Date.now() - (3 * 60 + 33) * 60000);
    const START = Date.UTC(2026, 9, 27); // cycle 1 begins oct 27, 2026; move to launch day if wanted
    const day = Math.max(0, Math.round((Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - START) / 864e5));
    const cycle = Math.floor(day / n), pos = day % n;
    const order = all.map((_, i) => i), rnd = this.rng(0x5EED + cycle * 7919);
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const tmp = order[i]; order[i] = order[j]; order[j] = tmp; }
    return all[order[pos]];
  }
  scheduleTurn() {
    const now = new Date(), next = new Date(now);
    next.setHours(3, 33, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    this._dayT = setTimeout(() => { this._e = null; this.forceUpdate(); this.scheduleTurn(); }, next - now + 1000);
  }
  renderVals() {
    if (!this._seed) { this._seed = Math.floor(Math.random() * 1e9); this._rot = ((Math.random() - 0.5) * 3).toFixed(2); }
    if (!this._fk1) { this._fk1 = this.flecks(this._seed + 3, 1); this._fk2 = this.flecks(this._seed + 9, 0.55); this._fk3 = this.flecks(this._seed + 21, 0.8); this._fk4 = this.flecks(this._seed + 33, 1.6); this._fk5 = this.flecks(this._seed + 47, 1.1); }
    if (!this._e) this._e = this.excerptOfDay();
    const e = this._e;
    this.ph(0);
    return {
      fk1: this._fk1,
      fk2: this._fk2,
      fk3: this._fk3,
      ph1: this.ph(0), ph2: this.ph(1), ph3: this.ph(2),
      bp1: this._bp[0], bp2: this._bp[1], bp3: this._bp[2], bs3: this._bs, fk4: this._fk4,
      rot: this._rot,
      fk5: (this.props.stripColor ?? 'pink') === 'pink' ? this.inkFlecks(this._fk5) : this._fk5,
      ...this.stripVals(),
      noSubmit: (ev) => { if (ev && ev.preventDefault) ev.preventDefault(); },
      title: e[1],
      text: e[0],
      loc: e[2],
      link: 'https://eternal.yusufmisdaq.com/#' + e[3]
    };
  }
}
await loadContent(["excerpts", "people", "releases", "news", "moments", "opportunities", "songs", "settings"]);
render(html`<${Component} ...${pageProps({"stripColor": "pink", "tickerDate": "today"})} />`, document.getElementById('app'));
