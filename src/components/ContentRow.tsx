
import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '@/types';

interface ContentRowProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const ContentRow = ({ title, movies, onMovieClick }: ContentRowProps) => {
  return (
    <div className="my-4 md:my-8">
      <h3 className="text-xl md:text-2xl font-bold mb-4 px-4 sm:px-8 lg:px-16">{title}</h3>
      <div className="flex overflow-x-auto space-x-2 md:space-x-4 px-4 sm:px-8 lg:px-16 pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-32 md:w-48">
             <MovieCard movie={movie} onCardClick={onMovieClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
