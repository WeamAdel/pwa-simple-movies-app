export type Movie = {
	title: string;
	description: string;
	rating: number;
	image: string;
};

export type MoviesResponse = Record<string, Movie>;
