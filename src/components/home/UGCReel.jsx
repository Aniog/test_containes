import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -280 : 280,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12 mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">
            Styled by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-base">
            #VelmoraWomen
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 border border-border flex items-center justify-center hover:border-base transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 border border-border flex items-center justify-center hover:border-base transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 md:px-8 lg:px-12 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative overflow-hidden snap-start group cursor-pointer"
          >
            <img
              src={`https://placehold.co/480x854/1C1917/C5A059?text=UGC+${item.id}`}
              alt={`UGC ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg text-white italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
