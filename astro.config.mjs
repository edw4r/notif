import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://edw4r.github.io',
  base: '/notif',
  output: 'static',
  outDir: './docs',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ]
});
