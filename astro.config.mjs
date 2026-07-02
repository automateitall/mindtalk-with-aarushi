// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import { site } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  // PLACEHOLDER domain (src/config/site.ts `url`) — swap both before launch.
  site: site.url,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    sitemap({
      // Keep noindex pages (e.g. /privacy-policy) out of the sitemap too.
      filter: (page) => !page.includes('/privacy-policy'),
    }),
  ]
});