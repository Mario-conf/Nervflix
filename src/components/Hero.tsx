
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Movie } from '@/types';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  movie: Movie;
  onMoreInfoClick: (movie: Movie) => void;
}

const Hero = ({ movie, onMoreInfoClick }: HeroProps) => {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate(`/watch/${movie.id}`);
  };

  return (
    <div className="relative h-[56.25vw] min-h-[400px] max-h-[800px] w-full">
      <img src={movie.imageUrl} alt={movie.title} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 text-white w-full md:w-2/5">
        <h2 className="text-4xl md:text-6xl font-bold">{movie.title}</h2>
        <p className="mt-4 text-base md:text-lg max-w-lg line-clamp-3">{movie.description}</p>
        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90" onClick={handlePlay}>
            <Play className="mr-2 h-6 w-6" fill="black" /> Reproducir
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-gray-500 bg-opacity-70 text-white hover:bg-gray-500/60" onClick={() => onMoreInfoClick(movie)}>
            Más información
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
