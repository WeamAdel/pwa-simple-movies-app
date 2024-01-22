import './styles/index.css';

if ('serviceWorker' in navigator) {
	try {
		const registration = await navigator.serviceWorker.register('../service-worker.js', {
			scope: '/',
		});
		console.log('SW registered: ', registration);
	} catch (error) {
		console.log('SW registration failed');
	}
}
