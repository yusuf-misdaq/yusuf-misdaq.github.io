// bio page: a slowly turning wheel of bio versions; choosing one spins it under the gold pointer and shows that text.
// content comes from content/bio.json (editor: "Bio"), in wheel order.
import { html, render, Component } from './vendor/preact-htm.js';
import { loadContent } from './site.js';
import { Header, Flecks, cachedFlecks } from './chrome.js';

const IDLE_SPEED = 4; // degrees per second while nobody has chosen yet
const slug = (t) => String(t || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

class Wheel extends Component {
  constructor(p) {
    super(p);
    this.angle = Math.random() * 360;
    this.hover = false;
  }
  componentDidMount() {
    this.reduce = false;
    try { this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    let last = 0;
    const step = (ts) => {
      this.raf = requestAnimationFrame(step);
      const dt = last ? Math.min(0.1, (ts - last) / 1000) : 0;
      last = ts;
      if (this.spin) {
        const t = Math.min(1, (ts - this.spin.t0) / this.spin.dur);
        const e = 1 - Math.pow(1 - t, 3);
        this.angle = this.spin.from + (this.spin.to - this.spin.from) * e;
        if (t >= 1) { this.spin = null; if (this.props.onLanded) this.props.onLanded(); }
      } else if (!this.props.settled && !this.hover && !this.reduce) {
        this.angle = (this.angle + IDLE_SPEED * dt) % 360;
      }
      this.apply();
    };
    this.raf = requestAnimationFrame(step);
    if (this.props.selected != null) this.landOn(this.props.selected, true);
  }
  componentWillUnmount() { cancelAnimationFrame(this.raf); }
  componentDidUpdate(prev) {
    if (prev.selected !== this.props.selected && this.props.selected != null) this.landOn(this.props.selected, false);
  }
  apply() {
    if (this.disc) this.disc.style.transform = 'rotate(' + this.angle.toFixed(3) + 'deg)';
    if (this.labels) this.labels.forEach((l) => { if (l) l.style.transform = 'rotate(' + (-this.angle).toFixed(3) + 'deg)'; });
  }
  // turn so that segment i sits under the pointer at the top
  landOn(i, instant) {
    const n = this.props.items.length, seg = 360 / n;
    let target = -(i * seg);
    const from = this.angle;
    let to = target;
    while (to < from + (instant ? 0 : 300)) to += 360;
    if (instant || this.reduce) { this.angle = to % 360; this.apply(); if (!instant && this.props.onLanded) this.props.onLanded(); return; }
    this.spin = { from, to, t0: performance.now(), dur: 1500 };
  }
  render({ items, selected, onPick }) {
    const n = items.length, seg = 360 / n;
    this.labels = [];
    const rad = (d) => (d - 90) * Math.PI / 180;
    const pt = (d, r) => (50 + r * Math.cos(rad(d))).toFixed(3) + ' ' + (50 + r * Math.sin(rad(d))).toFixed(3);
    return html`<div class="bwheel" onMouseEnter=${() => { this.hover = true; }} onMouseLeave=${() => { this.hover = false; }}>
      <span class="bpoint" aria-hidden="true"></span>
      <div class="bdisc lapis" ref=${(el) => { this.disc = el; }}>
        <${Flecks} list=${cachedFlecks('biowheel', 2)} />
        <svg class="bsvg" viewBox="0 0 100 100" aria-hidden="true">
          ${items.map((it, k) => { const a0 = k * seg - seg / 2, a1 = a0 + seg; return html`<path class=${'bwedge' + (k === selected ? ' on' : '')} d=${'M50 50 L' + pt(a0, 50) + ' A50 50 0 0 1 ' + pt(a1, 50) + ' Z'}></path>`; })}
          ${items.map((it, k) => html`<line x1="50" y1="50" x2=${pt(k * seg - seg / 2, 50).split(' ')[0]} y2=${pt(k * seg - seg / 2, 50).split(' ')[1]}></line>`)}
        </svg>
        ${items.map((it, k) => html`<span class="bseg" style=${'--a: ' + (k * seg) + 'deg'}>
          <button type="button" class=${'blab' + (k === selected ? ' on' : '')} ref=${(el) => { this.labels[k] = el; }} aria-pressed=${k === selected ? 'true' : 'false'} onClick=${() => onPick(k)}>${it.name}</button>
        </span>`)}
      </div>
      <span class="bhub" aria-hidden="true"></span>
    </div>`;
  }
}

class Bio extends Component {
  constructor(p) {
    super(p);
    const want = slug(decodeURIComponent((location.hash || '').slice(1)));
    const k = p.items.findIndex((b) => slug(b.name) === want);
    this.state = { sel: k >= 0 ? k : null };
  }
  pick(k) {
    this.setState({ sel: k });
  }
  landed() {
    const el = this.article;
    if (!el) return;
    let reduce = false;
    try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    const top = el.getBoundingClientRect().top + window.scrollY - 40;
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
  }
  render({ items }) {
    const sel = this.state.sel;
    const show = items[sel == null ? 0 : sel] || { name: 'main', text: '' };
    return html`<div class="page">
      <${Header} here="bio" />
      <main class="bio">
        <p class="bhint">${sel == null ? 'choose a bio' : 'bio · ' + show.name.toLowerCase()}</p>
        <${Wheel} items=${items} selected=${sel} settled=${sel != null} onPick=${(k) => this.pick(k)} onLanded=${() => this.landed()} />
        <article class="btext" key=${sel == null ? 0 : sel} ref=${(el) => { this.article = el; }}>
          ${show.text && show.text.replace(/<[^>]*>/g, '').trim()
            ? html`<div class="prose" dangerouslySetInnerHTML=${{ __html: show.text }}></div>`
            : html`<p class="bsoon">this version is still being written.</p>`}
        </article>
      </main>
    </div>`;
  }
}

export const files = ['settings', 'bio'];
export async function mount(el) {
  await loadContent(files);
  const items = (window.CONTENT.bio || []).filter((b) => b && b.name && !b.hidden);
  if (!items.length) items.push({ name: 'main', text: '' });
  render(html`<${Bio} items=${items} />`, el);
  return () => render(null, el);
}
