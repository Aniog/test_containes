import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useImageLoader } from '@/hooks/useImageLoader';

const reels = [
  { id: 'reel-1', caption: 'Stacked huggies for golden hour', query: 'gold huggie earrings on ear close up' },
  { id: 'reel-2', caption: 'A little sparkle, every day', query: 'gold necklace on neck close up' },
  { id: 'reel-3', caption: 'Ear cuffs, no piercing needed', query: 'gold ear cuff on ear' },
  { id: 'reel-4', caption: 'Gift-ready heirloom moments', query: 'gold jewelry gift box' },
  { id: 'reel-5', caption: 'Layered necklaces, effortless', query: 'layered gold necklaces on model' },
];

const ReelStrip = () => {
  const scrollRef = useRef(null);
  const containerRef = useImageLoader();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 260, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-champagne overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8 flex items-end justify-between">
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-gold-600 mb-2">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900">Worn by You</h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="p-2 border border-stone-300 hover:bg-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            className="p-2 border border-stone-300 hover:bg-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-5 md:px-8 snap-x snap-mandatory"
      >
        {reels.map((reel, index) => {
          const captionId = `${reel.id}-caption`;
          return (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] snap-start overflow-hidden group"
            >
              <img
                data-strk-img-id={reel.id}
                data-strk-img={`[${captionId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
              <p
                id={captionId}
                className="absolute bottom-4 left-4 right-4 font-serif italic text-white text-sm md:text-base leading-snug"
              >
                {reel.caption}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReelStrip;
