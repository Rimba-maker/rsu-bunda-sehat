import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: '/rsu-bunda-sehat',
  vite: {
    plugins: [tailwindcss()],
  },
});
