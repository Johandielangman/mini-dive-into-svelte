import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		fs: {
			allow: ['.'] // to load amplify_outputs.json from src/routes/AmplifyInit.svelte
		}
	}
});
