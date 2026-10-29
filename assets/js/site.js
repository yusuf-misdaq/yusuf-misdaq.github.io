// shared helpers for every page: load the editable content lists, and read preview settings from the address bar.

export async function loadContent(names) {
  const C = (window.CONTENT = window.CONTENT || {});
  await Promise.all(names.map(async (n) => {
    try {
      const r = await fetch('content/' + n + '.json', { cache: 'no-cache' });
      const d = r.ok ? await r.json() : null;
      C[n] = d && Array.isArray(d.items) ? d.items : d; // list files are stored as { items: [...] }
    } catch (e) {
      C[n] = null;
    }
  }));
  const links = (C.settings && C.settings.links) || {};
  window.FOOT_LINKS = {
    bandcamp: links.bandcamp || '#',
    instagram: links.instagram || '#',
    contact: links.contact || '#'
  };
}

// page settings can be previewed from the address bar, e.g. index.html?tickerDate=nov+24
export function pageProps(defaults) {
  const p = Object.assign({}, defaults);
  try {
    const q = new URLSearchParams(location.search);
    for (const k of Object.keys(p)) if (q.has(k)) p[k] = q.get(k);
  } catch (e) {}
  return p;
}

// phone layouts for the music/news strip can be compared from the address bar: ?strip=top or ?strip=end
try { const st = new URLSearchParams(location.search).get('strip'); if (st) document.documentElement.dataset.strip = st; } catch (e) {}

// iPhone Safari (iOS 26) tints its floating bottom toolbar from a fixed bar touching the bottom edge.
// on phones, an almost-hidden indigo bar there makes the toolbar match the footer instead of showing cream.
try {
  if (window.matchMedia('(hover: none) and (max-width: 760px)').matches) {
    const t = document.createElement('div');
    t.id = 'toolbar-tint';
    t.setAttribute('aria-hidden', 'true');
    t.style.cssText = 'position:fixed;left:0;right:0;bottom:-8px;height:12px;background:#1E2B55;pointer-events:none;z-index:1';
    (document.body || document.documentElement).appendChild(t);
  }
} catch (e) {}
