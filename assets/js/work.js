// a single project page: work.html?w=<slug>. content comes from content/works/<slug>.json (written by the editor, prepared at publish time).
import { html, render, Component } from './vendor/preact-htm.js';
import { loadContent } from './site.js';
import { Header, Flecks, cachedFlecks } from './chrome.js';

const W = { text: 'w-text', wide: 'w-wide', full: 'w-full', band: 'w-full' };
const width = (s, fallback) => W[s] || W[fallback] || 'w-text';
const focus = { top: 'center top', bottom: 'center bottom', left: 'left center', right: 'right center' };
const Rich = ({ body, cls }) => html`<div class=${'prose ' + (cls || '')} dangerouslySetInnerHTML=${{ __html: body || '' }}></div>`;
const Cap = ({ text }) => (text ? html`<p class="cap">${text}</p>` : null);

function videoSource(url) {
  const u = (url || '').trim();
  let m = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
  if (m) return { embed: 'https://www.youtube-nocookie.com/embed/' + m[1] + '?autoplay=1&rel=0', thumb: 'https://i.ytimg.com/vi/' + m[1] + '/hqdefault.jpg' };
  m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (m) return { embed: 'https://player.vimeo.com/video/' + m[1] + '?autoplay=1&dnt=1', thumb: '' };
  return null;
}

class Video extends Component {
  render({ b }) {
    const src = videoSource(b.url);
    if (!src && !b.placeholder) return null;
    const thumb = b.poster || (src && src.thumb);
    return html`<figure class=${width(b.size, 'wide')}>
      <div class="vid">
        ${!src ? html`<div class="lapis" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center"><${Flecks} list=${cachedFlecks('vidph', 1.6)} /><span class="play above" style="opacity: .6"><svg width="28" height="28" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.8 1.8 L12 7 L3.8 12.2 Z" fill="#D6B25E"></path></svg></span></div>`
        : this.state.on
          ? html`<iframe src=${src.embed} title=${b.caption || 'video'} allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
          : html`<button type="button" aria-label=${'play video' + (b.caption ? ': ' + b.caption : '')} onClick=${() => this.setState({ on: true })}>
              ${thumb ? html`<img class="poster-img" src=${thumb} alt="" loading="lazy" />` : html`<${Flecks} list=${cachedFlecks('vid' + b.url, 1.6)} />`}
              <span class="play"><svg width="28" height="28" viewBox="0 0 14 14" aria-hidden="true"><path d="M3.8 1.8 L12 7 L3.8 12.2 Z" fill="#D6B25E" stroke="#D6B25E" stroke-width="1" stroke-linejoin="round"></path></svg></span>
            </button>`}
      </div>
      <${Cap} text=${b.caption} />
    </figure>`;
  }
}

function Block({ b, i }) {
  const tight = b.tight ? ' tight' : '';
  switch (b.type) {
    case 'text':
      return html`<div class=${'w-text' + tight}><${Rich} body=${b.body} cls=${b.dropcap ? 'dropcap' : ''} /></div>`;
    case 'wrap':
      return html`<div class=${'w-text wrapbox' + tight}>
        ${b.image ? html`<figure class=${'wrapfig ' + (b.side === 'right' ? 'right' : 'left') + (b.small ? ' third' : '')}><img src=${b.image} alt=${b.alt || ''} loading="lazy" /><${Cap} text=${b.caption} /></figure>` : null}
        <${Rich} body=${b.body} />
      </div>`;
    case 'image':
      if (!b.image) return null;
      return html`<figure class=${width(b.size, 'wide') + ' img' + (b.size === 'band' ? ' band' : '') + tight}>
        <img src=${b.image} alt=${b.alt || ''} loading="lazy" style=${'object-position: ' + (focus[b.focus] || 'center')} />
        <${Cap} text=${b.caption} />
      </figure>`;
    case 'poster': {
      const photo = !!b.image;
      return html`<div class=${width(b.width, 'wide') + tight}>
        <div class=${'poster ' + (b.size || 'large') + ' c-' + (b.colour || 'lapis') + (photo ? ' photo' : '')} style=${photo ? '--pimg: url(' + JSON.stringify(b.image) + ')' : ''}>
          ${!photo && (b.colour || 'lapis') === 'lapis' ? html`<${Flecks} list=${cachedFlecks('poster' + i, 1)} />` : null}
          <p class="pt">${b.text}</p>
        </div>
      </div>`;
    }
    case 'split': {
      // panel: cream | ink | gold | lapis | pink ; text: indigo | gold | cream | pink ; image shape: square | portrait | landscape | whole
      const panel = b.panel || (b.style === 'lapis' ? 'lapis' : 'cream');
      const text = b.text || (panel === 'ink' || panel === 'lapis' ? 'cream' : 'indigo');
      const shape = b.shape || 'square';
      const half = (h, side) => {
        if (!h) return html`<div></div>`;
        const inner = html`${panel === 'lapis' ? html`<${Flecks} list=${cachedFlecks('split' + i + side, 0.9)} />` : null}
          ${h.image ? html`<img class=${'above s-' + shape} src=${h.image} alt=${h.title || ''} loading="lazy" style=${'object-position: ' + (focus[h.focus] || 'center')} />` : null}
          <h3 class="above">${h.title}</h3>${h.line ? html`<p class="above">${h.line}</p>` : null}${h.link ? html`<span class="go above">${h.linkText || 'more'} →</span>` : null}`;
        const cls = 'half p-' + panel + ' t-' + text;
        return h.link ? html`<a class=${cls} href=${h.link}>${inner}</a>` : html`<div class=${cls}>${inner}</div>`;
      };
      return html`<div class=${'w-wide split' + tight}>${half(b.left, 'l')}${half(b.right, 'r')}</div>`;
    }
    case 'quote':
      return html`<figure class=${(b.style === 'poster' ? 'w-wide q-poster' : 'w-text q-quiet') + tight}><p>${b.text}</p>${b.by ? html`<figcaption class="q-by">— ${b.by}</figcaption>` : null}</figure>`;
    case 'poem':
      return html`<div class=${'w-text poem-b' + tight}>${b.title ? html`<h3>${b.title}</h3>` : null}<pre>${b.text}</pre></div>`;
    case 'gallery': {
      const imgs = (b.images || []).filter(Boolean);
      if (!imgs.length) return null;
      return html`<figure class=${(b.style === 'grid' ? 'w-wide' : 'w-full') + tight}>
        <div class=${b.style === 'grid' ? 'grid' : 'strip'} tabindex="0" aria-label="gallery">${imgs.map((src) => html`<img src=${src} alt="" loading="lazy" />`)}</div>
        <${Cap} text=${b.caption} />
      </figure>`;
    }
    case 'video':
      return html`<${Video} b=${b} />`;
    case 'clip':
      if (!b.file) return null;
      return html`<figure class=${width(b.size, 'wide') + ' clip' + tight}><video src=${b.file} autoplay muted loop playsinline preload="metadata"></video><${Cap} text=${b.caption} /></figure>`;
    case 'audio':
      if (!b.file) return null;
      return html`<div class=${'w-text' + tight}><div class="aud"><span>${b.title}</span><audio src=${b.file} controls preload="none"></audio></div></div>`;
    case 'links':
      return html`<nav class=${'w-wide links' + tight} aria-label="links">${(b.items || []).filter((l) => l && l.url).map((l) => html`<a href=${l.url} target=${/^https?:/.test(l.url) ? '_blank' : '_self'} rel="noopener">${l.label || l.url}</a>`)}</nav>`;
    case 'pinned':
      return html`<div class=${'w-wide pinned ' + (b.side === 'right' ? 'right' : 'left') + tight}>
        <figure class="pin" style="margin: 0">${b.image ? html`<img src=${b.image} alt=${b.alt || ''} loading="lazy" />` : null}<${Cap} text=${b.caption} /></figure>
        <${Rich} body=${b.body} />
      </div>`;
    case 'divider':
      if (b.style === 'band') return html`<div class="w-full lapisband"><${Flecks} list=${cachedFlecks('band' + i, 0.8)} /></div>`;
      return html`<div class="divider" aria-hidden="true"><svg width="44" height="44" viewBox="0 0 44 44"><circle cx="22" cy="22" r="17" fill="none" stroke="#1E2B55" stroke-width="3"></circle><circle cx="22" cy="22" r="7" fill="#D6B25E"></circle></svg></div>`;
    case 'credits':
      return html`<div class=${'w-text credits' + tight}><pre>${b.text}</pre></div>`;
    default:
      return null;
  }
}

class Work extends Component {
  render({ work, prev, next }) {
    if (!work) {
      return html`<div class="page"><${Header} here="selected works" /><main class="wk"><p class="wk-missing">this work isn't here. <a href="works.html">back to selected works</a></p></main></div>`;
    }
    const hasCover = !!work.cover && !work.hideCover;
    return html`<div class="page">
      <${Header} here="selected works" />
      <main class="wk">
        <section class=${'wk-hero lapis' + (hasCover ? '' : ' nocover')}>
          <${Flecks} list=${cachedFlecks('hero', 1)} />
          <div class="above">
            <h1 class="wk-title">${work.title}</h1>
            ${work.details ? html`<p class="wk-meta">${work.details.replace(/\s+[-\u2013|]\s+/g, ' \u00b7 ')}</p>` : null}
            ${work.line ? html`<p class="wk-line">${work.line}</p>` : null}
          </div>
          ${hasCover ? html`<img class="wk-cover above" src=${work.cover} alt=${work.title + ' cover'} style=${'--tilt: ' + TILT + 'deg'} />` : null}
        </section>
        <a class="wk-back" href="works.html">← all selected works</a>
        <div class="blocks">${(work.blocks || []).map((b, i) => html`<${Block} b=${b} i=${i} />`)}</div>
        <nav class="wk-nav" aria-label="more works">
          ${prev ? html`<a href=${'work.html?w=' + encodeURIComponent(prev.slug)}>← ${prev.title}</a>` : html`<span></span>`}
          ${next ? html`<a href=${'work.html?w=' + encodeURIComponent(next.slug)} style="text-align: right">${next.title} →</a>` : null}
        </nav>
      </main>
      
    </div>`;
  }
}

let TILT = 0;
export const files = ['settings', 'works'];
export async function mount(el) {
  const slug = new URLSearchParams(location.search).get('w') || '';
  // a new gentle tilt for the cover on every visit
  TILT = ((Math.random() < 0.5 ? -1 : 1) * (0.6 + Math.random() * 1.9)).toFixed(2);
  await loadContent(files);
  let work = null;
  try {
    const r = await fetch('content/works/' + encodeURIComponent(slug) + '.json', { cache: 'no-cache' });
    if (r.ok) work = await r.json();
  } catch (e) {}
  if (work && work.hidden) work = null;
  // previous / next: newest first, matching "newest" on the selected works page
  const list = (window.CONTENT.works || []).slice().sort((a, b) => (+b.year || 0) - (+a.year || 0) || String(a.title).localeCompare(b.title));
  const at = list.findIndex((w) => w.slug === slug);
  document.title = work ? work.title.toLowerCase() + ' · yusuf misdaq' : 'yusuf misdaq';
  render(html`<${Work} work=${work} prev=${at > 0 ? list[at - 1] : null} next=${at >= 0 && at < list.length - 1 ? list[at + 1] : null} />`, el);
  return () => render(null, el);
}
