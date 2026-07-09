import React, { useRef } from 'react';
import { ugcReels as reels } from './data-products.js';

export default function UgcReel() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-velmora-sand py-20 lg:py-24">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] text-velmora-gold uppercase mb-3">Styled by You</p>
        <h2 className="font-serif text-3xl lg:text-4xl tracking-wide">As Seen On</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-6 lg:px-12 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="aspect-[9/16] bg-velmora-cream relative overflow-hidden group">
              <img
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic tracking-wide leading-snug"
              >
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
