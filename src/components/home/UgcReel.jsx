import React, { useRef } from 'react';
import { ugcItems } from '@/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UgcReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-deep-900 py-20 lg:py-28 overflow-hidden">
      <div className="text-center mb-14 px-6">
        <p className="text-xs tracking-widest3 uppercase text-accent-light mb-3">Styled by You</p>
        <h2 className="font-serif text-3xl lg:text-4xl text-cream font-light">As Worn on Instagram</h2>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Reel strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 px-6 lg:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative rounded-sm overflow-hidden snap-start group"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 bg-warm-700 flex items-center justify-center">
                <span className="text-warm-300 text-xs">UGC</span>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-950/80 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-cream text-lg italic">"{item.caption}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
