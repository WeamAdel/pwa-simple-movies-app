import { VitePWA } from 'vite-plugin-pwa';

export default {
	plugins: [
		VitePWA({
			mode: 'development',
			registerType: 'autoUpdate',
			includeAssets: ['./favicon.ico'],
			workbox: {
				navigateFallback: './offline.html',
				globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,webp,svg,json}'],
			},
			devOptions: {
				enabled: true,
			},
			manifest: {
				name: 'Movies App',
				short_name: 'Movies',
				description: 'A simple app to watch movies and documentaries',
				categories: ['entertainment', 'documentary'],
				display: 'standalone',
				background_color: '#130007',
				theme_color: '#130007',
				start_url: '/',
				icons: [
					{
						src: '/icons/app/logo-48x48.png',
						sizes: '48x48',
						type: 'image/png',
					},
					{
						src: '/icons/app/logo-96x96.png',
						sizes: '96x96',
						type: 'image/png',
					},
					{
						src: '/icons/app/logo-144x144.png',
						sizes: '144x144',
						type: 'image/png',
					},
					{
						src: '/icons/app/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/icons/app/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
};
