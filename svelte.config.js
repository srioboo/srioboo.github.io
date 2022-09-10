import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// ssr: false,
		paths: {
			//base: '/srioboo.github.io',
			base: dev ? '' : ''
		},
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			default: true
		}
	}
};

export default config;
