import React from 'react';
import { REELS } from '@/lib/data';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const UGCReel = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex items-end justify-between">
        <div>
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif tracking-tight mb-2">As Worn by You</h2>
          <p className="text-stone-500 uppercase tracking-widest text-[10px]">Follow us @VELMORAOFFICIAL</p>
        </div>
      </div>

      <ScrollArea className="w-full whitespace-nowrap px-6 md:px-12">
        <div className="flex gap-4 pb-8">
          {REELS.map((reel) => (
            <div 
              key={reel.id} 
              className="relative w-[280px] md:w-[320px] aspect-[9/16] flex-shrink-0 group overflow-hidden bg-stone-100"
            >
              <img
                data-strk-img-id={`ugc-reel-${reel.id}`}
                data-strk-img={`[reel-caption-${reel.id}] jewelry gold model aesthetic aesthetic earring necklace`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt="Social Media Reel"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p id={`reel-caption-${reel.id}`} className="text-white font-serif text-lg leading-tight whitespace-normal">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default UGCReel;
