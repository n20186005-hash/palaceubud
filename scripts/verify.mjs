import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const forbidden = ['example' + '.com', 'local' + 'host', 'chrome-' + 'extension://'];
const required = ['package.json', 'pnpm-lock.yaml', 'astro.config.mjs', '.node-version', 'wrangler.jsonc', 'src/pages/index.astro'];
for (const rel of required) {
  if (!existsSync(join(root, rel))) throw new Error(`Berkas wajib tidak ditemukan: ${rel}`);
}
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (['node_modules', '.git', '.astro', '.wrangler', 'dist'].includes(name)) continue;
    const p = join(dir, name);
    statSync(p).isDirectory() ? out.push(...walk(p)) : out.push(p);
  }
  return out;
}
const files = walk(root).filter((p) => !/\.(webp|png|jpg|jpeg|ico)$/.test(p));
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const value of forbidden) if (text.includes(value)) throw new Error(`Konten terlarang "${value}" ditemukan di ${file}`);
}
const astroConfig = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
if (!astroConfig.includes("const site = 'https://palaceubud.com'")) throw new Error('Domain produksi tidak sesuai konfigurasi situs.');
console.log('Pemeriksaan statis proyek lulus.');
