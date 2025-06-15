
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import Footer from '@/components/Footer';
import { featuredMovie, categories } from '@/data/movies';
import MovieDetailSheet from '@/components/MovieDetailSheet';
import { Movie } from '@/types';
import TimelineSection from '@/components/TimelineSection';
import LogoCloud from '@/components/LogoCloud';

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero movie={featuredMovie} onMoreInfoClick={handleMovieClick} />
        <LogoCloud />
        <div className="pb-8">
          {categories.map((category) => (
            <ContentRow 
              key={category.slug} 
              title={category.title} 
              movies={category.movies} 
              onMovieClick={handleMovieClick}
            />
          ))}
          <TimelineSection />
        </div>
      </main>
      <Footer />
      <MovieDetailSheet 
        movie={selectedMovie} 
        open={!!selectedMovie} 
        onOpenChange={(isOpen) => !isOpen && setSelectedMovie(null)}
      />
    </div>
  );
};

export default Index;
