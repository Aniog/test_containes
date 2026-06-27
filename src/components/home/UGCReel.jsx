import React, { useRef } from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { ugcItems } from '@/data/ugc';

const UGCReel = () => {
  const scrollRef = useRef(null);
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">@velmorajewelry</p>
          <h2 className="font-serif text-3xl md:text-4xl">Styled by You</h2>
        </div>
        <a
          href="#"
          className="hidden md:inline-block text-xs uppercase tracking-[0.2em] border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
        >
          Follow Along
        </a>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 hide-scrollbar snap-x snap-mandatory"
      >
        {ugcItems.map((item, idx) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] snap-start group overflow-hidden bg-velmora-charcoal"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${idx}] gold jewelry worn ear neck editorial warm`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${idx}`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg text-white leading-snug"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
