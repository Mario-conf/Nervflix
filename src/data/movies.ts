import { Movie } from '@/types';
import featuredMovieData from './movies/featured.json';
import originalSagaData from './movies/original-saga.json';
import rebuildSagaData from './movies/rebuild-saga.json';

const processMovieImageUrl = (movie: Movie): Movie => {

  if (movie.imageUrl && typeof movie.imageUrl === 'string') {
    return {
      ...movie,
      imageUrl: movie.imageUrl, 
    };
  }

  return {
    ...movie,
    imageUrl: '/placeholder-image.png',
  };
};

const processedOriginalSagaData = (originalSagaData as Movie[]).map(processMovieImageUrl);
const processedRebuildSagaData = (rebuildSagaData as Movie[]).map(processMovieImageUrl);


export const featuredMovie: Movie = processMovieImageUrl(featuredMovieData as Movie);

export const categories: { slug: string; title: string; movies: Movie[] }[] = [
  {
    slug: 'trending-now',
    title: 'Saga Original',
    movies: processedOriginalSagaData,
  },
  {
    slug: 'popular-on-nervflix',
    title: 'Saga Rebuild',
    movies: processedRebuildSagaData,
  },
];