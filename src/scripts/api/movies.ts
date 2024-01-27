import type { MoviesResponse } from './models/Movie';

export function getMovies() {
	return fetch(import.meta.env.VITE_API_URL + '/mmovies.json')
		.then((response) => response.json())
		.then((data) => data as MoviesResponse);
}
