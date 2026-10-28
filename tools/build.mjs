// runs on GitHub at every publish (see .github/workflows/deploy.yml):
// turns each work in content/works/*.md (written by the editor) into content/works/<slug>.json for its project page,
// and gathers all of them into content/works.json for the selected works page.
import fs from 'node:fs';
import yaml from 'js-yaml';

const dir = 'content/works';
const items = [];
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()) {
  const raw = fs.readFileSync(dir + '/' + f, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  let data = {};
  try { data = (m ? yaml.load(m[1]) : {}) || {}; } catch (e) { console.error('could not read ' + f + ': ' + e.message); continue; }
  const slug = f.replace(/\.md$/, '');
  data.slug = slug;
  for (const k of ['year']) if (data[k] != null) data[k] = String(data[k]);
  fs.writeFileSync(dir + '/' + slug + '.json', JSON.stringify(data));
  if (!data.hidden && data.title) {
    items.push({ slug, title: data.title, form: data.form || 'music', year: data.year || '', details: data.details || '', line: data.line || '', cover: data.cover || '' });
  }
}
fs.writeFileSync('content/works.json', JSON.stringify({ items }, null, 2) + '\n');
console.log('prepared ' + items.length + ' works');
