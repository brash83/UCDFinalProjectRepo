import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://brash83.github.io/UCDFinalProjectRepo',
  build: {
    out: 'docs', // Set the build folder to docs for GitHub Pages deployment
  },
});
