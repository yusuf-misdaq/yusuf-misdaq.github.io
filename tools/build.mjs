// runs on GitHub at every publish (see .github/workflows/deploy.yml):
// turns each work in content/works/*.md (written by the editor) into content/works/<slug>.json for its project page,
// and gathers all of them into content/works.json for the selected works page.
// it never stops the site from publishing: a missing folder or a broken file is reported and skipped.
import fs from 'node:fs';
import yaml from 'js-yaml';

const dir = 'content/works';
const slugify = (t) => String(t).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/['\u2019]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'untitled';
const tile = (slug, d) => ({ slug, title: d.title, form: d.form || 'music', year: d.year != null ? String(d.year) : '', details: d.details || '', line: d.line || '', cover: d.cover || '' });

// works saved in the older single list (content/works.json) are kept, so nothing added there is lost
let older = [];
try {
  const j = JSON.parse(fs.readFileSync('content/works.json', 'utf8'));
  older = (Array.isArray(j) ? j : j.items || []).filter((w) => w && w.title && !w.hidden);
} catch (e) {}

const items = [];
const seen = new Set();
if (fs.existsSync(dir)) {
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()) {
    const raw = fs.readFileSync(dir + '/' + f, 'utf8');
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    let data = {};
    try { data = (m ? yaml.load(m[1]) : {}) || {}; } catch (e) { console.error('skipped ' + f + ': ' + e.message); continue; }
    const slug = f.replace(/\.md$/, '');
    data.slug = slug;
    if (data.year != null) data.year = String(data.year);
    fs.writeFileSync(dir + '/' + slug + '.json', JSON.stringify(data));
    if (data.title) seen.add(String(data.title).toLowerCase());
    if (!data.hidden && data.title) items.push(tile(slug, data));
  }
} else {
  console.log('no content/works folder yet: using the older works list');
  fs.mkdirSync(dir, { recursive: true });
}
for (const w of older) {
  if (seen.has(String(w.title).toLowerCase())) continue;
  const slug = w.slug || slugify(w.title);
  if (!fs.existsSync(dir + '/' + slug + '.json')) fs.writeFileSync(dir + '/' + slug + '.json', JSON.stringify(Object.assign({}, w, { slug, blocks: w.blocks || [] })));
  items.push(tile(slug, w));
  seen.add(String(w.title).toLowerCase());
}
fs.writeFileSync('content/works.json', JSON.stringify({ items }, null, 2) + '\n');
console.log('prepared ' + items.length + ' works');
