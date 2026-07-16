import React from 'react';
import { ugcData } from '@/data/seed';

const UgcReels = () => {
  return (
    <section className="py-20 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
        <h2 id="ugc-title" className="text-2xl md:text-4xl font-serif mb-4">Worn by You</h2>
        <p className="text-stone-500 uppercase tracking-widest text-xs">@velmorajewelry</p>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 md:px-8 pb-8 snap-x snap-mandatory">
        {ugcData.map((item) => (
          <div 
            key={item.id} 
            className="relative flex-none w-[280px] sm:w-[300px] aspect-[9/16] snap-center rounded-sm overflow-hidden group cursor-pointer"
          >
            <img
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[ugc-caption-${item.id}] [ugc-title] lifestyle jewelry on person`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p id={`ugc-caption-${item.id}`} className="font-serif text-lg leading-snug drop-shadow-md">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReels;