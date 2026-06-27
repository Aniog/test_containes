import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'woman wearing gold earrings close-up warm light portrait' },
  { id: 'ugc-2', caption: 'Everyday elegance', query: 'woman wearing gold necklace casual style editorial' },
  { id: 'ugc-3', caption: 'Stack & layer', query: 'woman wearing gold huggie earrings stacked ear close-up' },
  { id: 'ugc-4', caption: 'Statement piece', query: 'gold jewelry on woman neck warm lighting editorial' },
  { id: 'ugc-5', caption: 'Minimal luxury', query: 'woman wearing delicate gold chain necklace portrait' },
  { id: 'ugc-6', caption: 'Gifting season', query: 'luxury jewelry gift box gold earrings elegant packaging' },
  { id: 'ugc-7', caption: 'Golden moments', query: 'close-up gold jewelry on skin warm tone editorial' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 280;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-charcoal overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              As Seen On You
            </p>
            <h2 className="section-title text-cream">@VelmoraJewelry</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-cream hover:border-cream/50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/50 hover:text-cream hover:border-cream/50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable reel */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-10 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] sm:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[ugc-caption-${i}] ${item.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${i}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-cream text-sm italic leading-snug"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
