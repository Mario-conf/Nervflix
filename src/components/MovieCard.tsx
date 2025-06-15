
import React from 'react';
import { Movie } from '@/types';

interface MovieCardProps {
  movie: Movie;
  onCardClick: (movie: Movie) => void;
}

const MovieCard = ({ movie, onCardClick }: MovieCardProps) => {
  return (
    <div
      className="group aspect-[2/3] w-full overflow-hidden rounded-sm transition-transform duration-300 ease-in-out md:hover:scale-110 md:hover:z-10 cursor-pointer"
      onClick={() => onCardClick(movie)}
    >
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className={`w-full h-full object-cover ${
          movie.id === 'eva-ep-25' ? 'object-left' : ''
        }`}
      />
    </div>
  );
};

export default MovieCard;
