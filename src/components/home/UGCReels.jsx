import { useEffect, useRef } from 'react';
import { ugcCards } from '@/data/testimonials';

export default function UGCReels() {
  const containerRef = useRef(null);

  return (
    <section className="py-16 lg:py-24 bg-brand-cream overflow-hidden">
      <div ref={containerRef}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-10">
          <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl text-brand-charcoal font-light">
            How They Wear It
          </h2>
          <div className="w-16 h-px bg-brand-gold/40 mt-5" />
        </div>

        {/* Horizontal scroll reel */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-10 pb-2">
          {ugcCards.map((card, index) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[200px] sm:w-[220px] lg:w-[240px] aspect-[9/16] relative rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={card.imgId}
                data-strk-img={`[ugc-caption-${card.id}] jewelry on woman skin gold warm lighting`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={card.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${card.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg text-brand-ivory/90 italic leading-snug"
              >
                {card.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
