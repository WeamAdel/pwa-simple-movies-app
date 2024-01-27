import { getErrorTemp } from './common-templates';
import { getMovies } from './api/movies';
import { isOffline } from './utils';
import type { Movie, MoviesResponse } from './api/models/Movie';

const movieCardTemplate = document.getElementById('movie-card-template') as HTMLTemplateElement;
const movieCardsList = document.getElementById('movies-list');
const movieCardsListContainer = document.getElementById('movies-list-container');

function handleLoadingMovies() {
	getMovies()
		.then((res) => {
			renderMovies(res);
		})
		.catch(() => {
			const message = isOffline()
				? 'You are offline'
				: 'Something went wrong, please try again later';

			const errorMessage = getErrorTemp(message);
			if (errorMessage) {
				movieCardsListContainer?.appendChild(errorMessage);
			} else {
				alert(message);
			}
		});
}

function renderMovies(movies: MoviesResponse) {
	const movieCards = Object.values(movies).map((movie) => renderMovieCard(movie));
	const movieCardsFragment = document.createDocumentFragment();

	movieCards.forEach((movieCard) => {
		if (movieCard) {
			movieCardsFragment.appendChild(movieCard);
		}
	});
	movieCardsList?.appendChild(movieCardsFragment);
}

function renderMovieCard(movie: Movie) {
	if (!movieCardTemplate) {
		return;
	}

	const content = movieCardTemplate.content.cloneNode(true) as HTMLDivElement;
	const movieCard = content.querySelector('.movie-card') as HTMLDivElement;
	const title = movieCard.querySelector('.movie-card__title') as HTMLElement;
	const desc = movieCard.querySelector('.movie-card__desc') as HTMLElement;
	const rating = movieCard.querySelector('.movie-card__rating') as HTMLElement;
	const image = movieCard.querySelector('.movie-card__img') as HTMLImageElement;

	title.textContent = movie.title;
	desc.textContent = movie.description;
	rating.textContent = movie.rating.toString();
	image.src = movie.image;

	return movieCard;
}

handleLoadingMovies();
