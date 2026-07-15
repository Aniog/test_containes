import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 3;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal-800 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="section-padding flex items-end justify-between mb-8 md:mb-10">
          <div>
            <p className="text-caption uppercase tracking-[0.25em] text-gold-400 mb-2 font-sans">
              #VelmoraStyle
            </p>
            <h2 className="text-heading-1 text-cream-100">
              As Seen on You
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 flex items-center justify-center border border-cream-500/30 text-cream-400 hover:border-gold-400 hover:text-gold-400 transition-all rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 flex items-center justify-center border border-cream-500/30 text-cream-400 hover:border-gold-400 hover:text-gold-400 transition-all rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reel scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide section-padding pb-4"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image */}
              <img
                data-strk-img-id={item.id}
                data-strk-img={`${item.caption} ${item.category} jewelry on woman ear neck closeup`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-body-lg text-cream-100 italic">
                  "{item.caption}"
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
