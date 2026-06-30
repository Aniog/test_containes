import React from 'react';
import { ugcReels } from '../../data/products';

export default function UgcReelsRow() {
  return (
    <section className="bg-velmora-espresso py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-velmora-gold text-xs font-sans tracking-[0.2em] uppercase mb-4">Styled by You</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              As Seen On
            </h2>
            <p className="text-velmora-muted text-sm max-w-md">
              Tag <span className="text-velmora-gold">@velmora</span> to be featured
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 lg:px-16 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[220px] md:w-[280px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-velmora-charcoal overflow-hidden group cursor-pointer">
              <img
                alt={reel.caption}
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[ugc-caption-${reel.id}] gold jewelry on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-caption-${reel.id}`} className="font-serif text-white text-sm italic">{reel.caption}</p>
                <p className="text-velmora-gold text-[10px] font-sans tracking-wider uppercase mt-1">{reel.product}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
