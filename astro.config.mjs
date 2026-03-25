import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Required for sitemap -> Replace with your site's URL
	site: 'https://arqfi.com',
	output: 'static',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
