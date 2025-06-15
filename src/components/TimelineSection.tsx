
import React from 'react';
import { History } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OriginalUniverseContent from './timeline/OriginalUniverseContent';
import RebuildUniverseContent from './timeline/RebuildUniverseContent';

const TimelineSection = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12 text-center flex items-center justify-center">
        <History className="mr-4 h-10 w-10 text-red-400" />
        Guía del Universo Evangelion
      </h2>
      
      <div className="max-w-5xl mx-auto text-gray-300">
        <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
          <AccordionItem value="item-1" className="bg-zinc-900/70 border border-zinc-800 rounded-lg px-4 sm:px-6 transition-all">
            <AccordionTrigger className="text-left text-2xl font-bold text-red-400 hover:text-red-300 data-[state=open]:text-red-300 transition-colors py-4 no-underline hover:no-underline">
              Universo Original: Neon Genesis Evangelion
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed pb-6 text-gray-400">
              <OriginalUniverseContent />
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="bg-zinc-900/70 border border-zinc-800 rounded-lg px-4 sm:px-6 transition-all">
            <AccordionTrigger className="text-left text-2xl font-bold text-red-400 hover:text-red-300 data-[state=open]:text-red-300 transition-colors py-4 no-underline hover:no-underline">
              El Nuevo Universo: Rebuild of Evangelion
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed pb-6 text-gray-400">
              <RebuildUniverseContent />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default TimelineSection;
