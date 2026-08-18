# Panduan Puri Saren Ubud

Situs informasi wisata independen dan nirlaba untuk Puri Saren Agung (Ubud Palace), Ubud, Kabupaten Gianyar, Bali. Proyek ini berupa satu halaman statis tanpa basis data, akun pengguna, atau CMS.

## Teknologi yang dikunci

- Astro 7.2.2
- Tailwind CSS 4.3.3 melalui `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.3
- Wrangler 4.123.0
- pnpm 11.22.0
- Node.js 24.19.0

Semua versi dependensi langsung ditulis secara pasti di `package.json`. Versi pnpm juga dikunci melalui `packageManager`, sedangkan Node.js dikunci melalui `engines` dan `.node-version`.

## Menjalankan proyek

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Untuk pengembangan lokal:

```bash
pnpm dev
```

## Domain produksi dan sitemap

Domain produksi hanya diatur di satu tempat: konstanta `site` pada `astro.config.mjs`.

Sebelum domain tersedia, biarkan nilainya kosong. Dalam keadaan ini proyek tetap dapat dibangun; tag URL absolut yang membutuhkan domain akan dihilangkan atau menggunakan jalur relatif, dan integrasi sitemap tidak diaktifkan. Setelah domain siap, isi konstanta tersebut dengan URL produksi lalu bangun ulang. Jangan menambahkan domain produksi di berkas lain.

## Cloudflare Workers

Proyek menyajikan keluaran statis dari direktori `dist` melalui Cloudflare Workers Assets. Setelah autentikasi Wrangler tersedia:

```bash
pnpm deploy
```

Konfigurasi berada di `wrangler.jsonc` dan tidak menggunakan basis data maupun layanan penyimpanan aplikasi.

## Privasi dan analitik

ID GA4 sudah disiapkan sesuai kebutuhan proyek, tetapi skrip Google Analytics tidak dimuat sebelum pengunjung memberikan persetujuan analitik. Preferensi persetujuan disimpan secara lokal di peramban. Peta Google tertanam sebagai layanan pihak ketiga dan dijelaskan dalam kebijakan privasi.

## Foto dan sumber informasi

Foto Puri Saren/Ubud yang digunakan pada halaman disimpan secara lokal dalam `public/images` dan berasal dari fotografer di Unsplash sesuai lisensi sumber. Informasi wisata disusun secara netral dari sumber pemerintah/pariwisata, data peta publik, dan sumber transportasi terkait. Selalu verifikasi jam, akses, pertunjukan, dan kondisi perjalanan melalui kanal resmi sebelum berangkat.
