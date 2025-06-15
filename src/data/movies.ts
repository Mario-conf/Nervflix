
import { Movie } from '@/types';
import featuredMovieData from './movies/featured.json';
import originalSagaData from './movies/original-saga.json';
import rebuildSagaData from './movies/rebuild-saga.json';

const processMovieImageUrl = (movie: Movie): Movie => {
  if (movie.imageUrl) {
    let imagePath: string;
    if (movie.imageUrl.startsWith('./')) {
      // Handles legacy paths like in rebuild-saga.json, which is read-only.
      // The path is relative to /src/data/movies/, so we construct it from /src/data/.
      imagePath = `./movies/${movie.imageUrl.substring(2)}`;
    } else {
      // Handles new simplified paths (just the filename) in our editable JSON files.
      imagePath = `./movies/screenpng/${movie.imageUrl}`;
    }
    
    return {
      ...movie,
      imageUrl: new URL(imagePath, import.meta.url).href,
    };
  }
  return movie;
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
