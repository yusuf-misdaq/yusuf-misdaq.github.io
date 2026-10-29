// the shell: the music/news strip and the footer are mounted once and stay put.
// moving between pages swaps only the page itself (#app) and its styles, so the music never stops.
import { html, render } from './vendor/preact-htm.js';
import { Footer } from './chrome.js';

const ROUTES = ['index.html', 'works.html', 'work.html', 'opportunities.html', 'inspirations.html', 'bio.html'];
const app = document.getElementById('app');
const me = document.currentScript || document.querySelector('script[data-page]');
let unmount = null;
let navId = 0;
let shown = location.pathname + location.search;
const scrolls = {};

try { history.scrollRestoration = 'manual'; } catch (e) {}

function routeOf(url) {
  if (url.origin !== location.origin) return null;
  const base = new URL('.', document.baseURI).pathname;
  if (!url.pathname.startsWith(base)) return null;
  const file = url.pathname.slice(base.length) || 'index.html';
  return ROUTES.includes(file) ? file : null;
}

async function show(pageJs, opts = {}) {
  const id = ++navId;
  const mod = await import(new URL(pageJs, document.baseURI).href);
  if (id !== navId) return;
  if (mod.files) {
    const { loadContent } = await import('./site.js');
    await loadContent(mod.files);
  }
  if (id !== navId) return;
  if (unmount) { try { unmount(); } catch (e) {} unmount = null; }
  if (opts.css != null) document.getElementById('page-css').textContent = opts.css;
  if (opts.title) document.title = opts.title;
  shown = location.pathname + location.search;
  unmount = await mod.mount(app);
  if (id !== navId) return;
  if (opts.scroll != null) window.scrollTo(0, opts.scroll);
  else if (location.hash) { const t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) t.scrollIntoView(); else window.scrollTo(0, 0); }
  else window.scrollTo(0, 0);
}

const pageCache = {};
async function fetchPage(file) {
  if (!pageCache[file]) {
    pageCache[file] = fetch(file, { cache: 'no-cache' }).then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); }).then((t) => {
      const d = new DOMParser().parseFromString(t, 'text/html');
      const s = d.querySelector('script[data-page]');
      const c = d.getElementById('page-css');
      if (!s || !c) throw new Error('not a shell page');
      return { js: s.getAttribute('data-page'), css: c.textContent, title: d.title };
    });
    pageCache[file].catch(() => { delete pageCache[file]; });
  }
  return pageCache[file];
}

async function go(url, push) {
  const file = routeOf(url);
  if (!file) { location.href = url.href; return; }
  scrolls[history.state && history.state.k || 'start'] = window.scrollY;
  let p;
  try { p = await fetchPage(file); } catch (e) { location.href = url.href; return; }
  if (push) history.pushState({ k: Date.now() + '' }, '', url.href);
  await show(p.js, { css: p.css, title: p.title });
}

document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest && e.target.closest('a[href]');
  if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
  const url = new URL(a.getAttribute('href'), location.href);
  if (!routeOf(url)) return;
  // a link to a spot on this same page keeps its usual behaviour
  if (url.pathname === location.pathname && url.search === location.search && url.hash) return;
  e.preventDefault();
  go(url, true);
});

window.addEventListener('popstate', (e) => {
  const url = new URL(location.href);
  if (url.pathname + url.search === shown) return; // only the #spot changed
  const file = routeOf(url);
  if (!file) { location.reload(); return; }
  const k = (e.state && e.state.k) || 'start';
  fetchPage(file).then((p) => show(p.js, { css: p.css, title: p.title, scroll: scrolls[k] || 0 })).catch(() => location.reload());
});

// first load: the page named in this html file, then the strip and footer once
const first = (me && me.getAttribute('data-page')) || 'assets/js/index.js';
if (!history.state) history.replaceState({ k: 'start' }, '');
await show(first, {});
import('./index.js').then((m) => m.mountStrip(document.getElementById('strip'))).catch((e) => console.error(e));
render(html`<${Footer} />`, document.getElementById('foot'));
