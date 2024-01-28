import { addMovie } from './api/movies';

const form = document.getElementById('add-movie-form');

if (form) {
	form.addEventListener('submit', submitForm);
}

function submitForm(event: Event) {
	event.preventDefault();
	const form = event.target as HTMLFormElement;
	const title = form.movieTitle.value;
	const description = form.description.value;
	const rating = +form.rating.value;
	const image = form.image.value;

	const movie = {
		title,
		description,
		rating,
		image,
	};

	addMovie(movie)
		.then((res) => {
			// window.location.href = '/';
		})
		.catch((err) => {
			console.log(err);
		});
}
