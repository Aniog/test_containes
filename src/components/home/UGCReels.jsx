import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const UGCReels = () => {
  const reels = [
    { id: 1, caption: 'Everyday elegance', tag: '@sarah.m' },
    { id: 2, caption: 'Stacking goals', tag: '@elena_j' },
    { id: 3, caption: 'Golden hour', tag: '@maya.k' },
    { id: 4, caption: 'Layering essentials', tag: '@chloe.smith' },
    { id: 5, caption: 'Details matter', tag: '@sophia_v' },
  ];

  return (
    <section className="py-24 bg-velmora-bg border-y border-velmora-border overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 id="ugc-title" className="text-3xl font-serif mb-2">As Worn by You</h2>
          <p id="ugc-subtitle" className="text-[10px] uppercase tracking-[0.3em] text-velmora-muted">Share your look with #VelmoraFine</p>
        </div>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 px-6 md:px-12 pb-8">
          {reels.map((reel) => (
            <div key={reel.id} className="relative w-64 md:w-80 aspect-[9/16] bg-velmora-border overflow-hidden group cursor-pointer">
              <img
                data-strk-img-id={`ugc-reel-${reel.id}`}
                data-strk-img={`jewelry gold model wearing [ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white whitespace-normal">
                <p 
                  id={`ugc-caption-${reel.id}`}
                  className="font-serif text-lg md:text-xl italic mb-1"
                >
                  &ldquo;{reel.caption}&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">{reel.tag}</span>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default UGCReels;
