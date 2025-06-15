
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from 'embla-carousel-auto-scroll';
import logos from '@/data/logos.ts';

const LogoCloud = () => {
  const plugin = React.useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const shuffledLogos = React.useMemo(
    () => [...logos].sort(() => Math.random() - 0.5),
    []
  );

  const smallLogos = ['01', '02'];

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {shuffledLogos.map((logo) => (
              <CarouselItem key={logo.id} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="p-4 flex items-center justify-center h-36">
                  <img 
                    src={logo.imageUrl} 
                    alt={logo.name} 
                    className={`max-h-full max-w-full object-contain drop-shadow-glow brightness-0 invert transition-transform duration-300 ${
                      smallLogos.includes(logo.name) ? 'scale-125' : 'scale-100'
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default LogoCloud;
