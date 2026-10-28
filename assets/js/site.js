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
