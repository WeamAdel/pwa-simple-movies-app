import type { Movie, MoviesResponse } from './models/Movie';

export function getMovies() {
	return fetch(import.meta.env.VITE_API_URL + '/movies.json')
		.then((response) => response.json())
		.then((data) => data as MoviesResponse);
}

export function addMovie(movie: Movie) {
	return fetch(import.meta.env.VITE_API_URL + '/movies.json', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(movie),
	})
		.then((response) => response.json())
		.then((data) => data as { name: string });
}
