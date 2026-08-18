import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Satu-satunya lokasi untuk mengisi domain produksi.
// Biarkan kosong sebelum domain tersedia; build tetap berjalan tanpa URL palsu.
const site = '';

export default defineConfig({
  site: site || undefined,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
