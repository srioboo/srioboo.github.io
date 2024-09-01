// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			// strict: false,
		}),
		// ssr: false,
		paths: {
			//base: '/srioboo.github.io',
			base: dev ? '' : ''
			// base: process.env.NODE_ENV === 'production' ? '/srioboo.github.io' : '',
		}
		/* provoca errore ne sveltekit v1
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			default: true
		}*/
	}
};

export default config;
