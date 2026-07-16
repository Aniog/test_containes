import React from 'react';
import { REELS } from '@/lib/data';

const UGCReels = () => {
  return (
    <section className="bg-background py-0 overflow-hidden">
      <div className="flex gap-4 overflow-x-auto px-6 pb-12 no-scrollbar snap-x">
        {REELS.map((reel) => (
          <div
            key={reel.id}
            className="flex-none w-[280px] md:w-[320px] aspect-[9/16] relative overflow-hidden group snap-center cursor-pointer"
          >
            <img
              data-strk-img-id={`reel-img-${reel.id}`}
              data-strk-img={`[${reel.id_tag}] jewelry model aesthetic`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-8 right-8">
              <h4 id={reel.id_tag} className="text-white font-serif text-2xl italic tracking-wide mb-2 opacity-100 transition-transform duration-500 group-hover:-translate-y-2">
                "{reel.title}"
              </h4>
              <p className="text-white/70 text-[10px] uppercase tracking-widest group-hover:opacity-100 opacity-60 transition-opacity">
                {reel.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
