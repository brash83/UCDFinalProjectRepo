import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://brash83.github.io/UCDFinalProjectRepo',  // Your GitHub Pages URL
  build: {
    out: 'docs',  // For GitHub Pages deployment
  },
  base: '/UCDFinalProjectRepo/',  // Ensure this matches your repository name
});
