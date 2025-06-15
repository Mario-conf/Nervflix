import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { featuredMovie, categories } from '@/data/movies';
import { Movie } from '@/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContentRow from '@/components/ContentRow';
import NotFound from './NotFound';
import { ArrowLeft } from 'lucide-react';

const Watch = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    // A simpler check to see if there's a page to go back to.
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  const allMovies = [featuredMovie, ...categories.flatMap(category => category.movies)];
  const movie = allMovies.find(m => m.id === movieId);

  if (!movie || !movie.videoUrl) {
    return <NotFound />;
  }
  
  const relatedMoviesCategory = categories.find(c => c.movies.length > 1);
  const relatedMovies = relatedMoviesCategory 
    ? relatedMoviesCategory.movies.filter(m => m.id !== movieId)
    : [];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <div className="px-4 sm:px-8 lg:px-16 py-4">
          <button onClick={handleBack} className="flex items-center gap-2 mb-4 text-white hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            Volver
          </button>
        </div>
        <div className="video-container mx-4 sm:mx-8 lg:mx-16 aspect-video">
          <iframe
            src={movie.videoUrl}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="p-4 sm:px-8 lg:px-16 md:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground mb-4">
            {movie.year && <span>{movie.year}</span>}
            {movie.duration && <span className="before:content-['•'] before:mr-4">{movie.duration}</span>}
            {movie.creator && <span className="before:content-['•'] before:mr-4">Creado por {movie.creator}</span>}
          </div>
          <p className="text-base max-w-3xl">{movie.description}</p>
        </div>
        
        {relatedMovies.length > 0 && (
          <div className="pb-8">
             <ContentRow
              title="Más Contenido"
              movies={relatedMovies}
              onMovieClick={(movie) => navigate(`/watch/${movie.id}`)}
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Watch;
