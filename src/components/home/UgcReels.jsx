import React from 'react';
import { REELS } from '@/config';

const UgcReels = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left space-y-6 md:space-y-0">
        <div>
           <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-3">Community Love</p>
           <h2 className="text-3xl font-serif">Wear Your Story</h2>
        </div>
        <a href="#" className="text-[11px] uppercase tracking-[0.2em] border-b hairline pb-1 hover:text-accent transition-colors">Follow @VelmoraStudio</a>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">
        {REELS.map((reel) => (
          <div key={reel.id} className="min-w-[260px] md:min-w-[300px] aspect-[9/16] relative group snap-start cursor-pointer overflow-hidden shadow-sm">
             <img 
               data-strk-img-id={`reel-${reel.id}`}
               data-strk-img={reel.imageSearch}
               data-strk-img-ratio="9x16"
               data-strk-img-width="600"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
               alt={reel.caption}
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
             <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <p className="font-serif italic text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">{reel.caption}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReels;
