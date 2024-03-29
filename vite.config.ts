import { VitePWA } from 'vite-plugin-pwa';

export default {
	build: {
		rollupOptions: {
			input: ['./index.html', './offline.html', './help.html', './about.html'],
		},
	},
	plugins: [
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['./images/error.svg'],
			workbox: {
				navigateFallback: './offline.html',
				globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,webp,svg,json}'],
				runtimeCaching: [
					{
						urlPattern: ({ url }) => {
							console.log(url);

							return url.origin.match('https://pwa-simple-movies-app-default-rtdb.firebaseio.com');
						},
						handler: 'NetworkFirst',
						options: {
							cacheName: 'api',
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
				],
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
