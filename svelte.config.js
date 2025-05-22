// svelte.config.js
import adapter from 'svelte-adapter-deno';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
  // use vitePreprocess from the plugin
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      out: 'build'
    })
  }
};
