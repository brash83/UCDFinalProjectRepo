import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://brash83.github.io/UCDFinalProjectRepo',
  build: {
    outDir: 'dist',  // ✅ Keep output in 'dist/' instead of 'docs/'
  },
  base: '/UCDFinalProjectRepo/', // Set base path to root for Vercel (remove /UCDFinalProjectRepo/)
});
