import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Satu-satunya lokasi untuk mengisi domain produksi.
// Domain sudah tersedia: mengisi nilai ini mengaktifkan integrasi sitemap,
// canonical, serta URL absolut Open Graph/Twitter.
const site = 'https://palaceubud.com';

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
