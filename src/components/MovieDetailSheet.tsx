
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Play, X } from "lucide-react";
import { Movie } from "@/types";
import { useNavigate } from 'react-router-dom';

interface MovieDetailSheetProps {
  movie: Movie | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MovieDetailSheet = ({ movie, open, onOpenChange }: MovieDetailSheetProps) => {
  const navigate = useNavigate();

  if (!movie) return null;

  const handlePlay = () => {
    if (movie) {
      navigate(`/watch/${movie.id}`);
      onOpenChange(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full max-w-none sm:max-w-none md:max-w-none lg:max-w-none xl:max-w-none bg-black/90 backdrop-blur-sm border-none text-white p-0" side="bottom">
        <div className="h-[90vh] overflow-y-auto scrollbar-hide">
          <div className="relative h-[60vh] min-h-[300px]">
            <img src={movie.imageUrl} alt={movie.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="absolute top-4 right-4">
                <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <X className="h-8 w-8 text-white bg-black/50 rounded-full p-1" />
                    <span className="sr-only">Cerrar</span>
                </SheetClose>
            </div>
            <div className="absolute bottom-0 left-0 p-4 md:p-8">
              <SheetHeader className="text-left">
                <SheetTitle className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">{movie.title}</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex space-x-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90" onClick={handlePlay}>
                  <Play className="mr-2 h-6 w-6" fill="black" /> Reproducir
                </Button>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-8">
            <SheetDescription className="text-base md:text-lg text-gray-300 max-w-3xl">
              {movie.description || "Esta es una descripción genérica para el contenido. Más detalles estarán disponibles próximamente."}
            </SheetDescription>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MovieDetailSheet;
