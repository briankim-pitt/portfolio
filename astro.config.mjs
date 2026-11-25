import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    // Ship this single-page site's styles with the HTML for the first paint.
    inlineStylesheets: 'always',
  },
});
