import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UgcReel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-velvet-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-warm-600 mb-4">As Seen On You</p>
            <h2 className="font-serif text-4xl md:text-5xl text-velvet-900">Styled by You</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="p-2 border border-velvet-300 hover:border-velvet-900 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-2 border border-velvet-300 hover:border-velvet-900 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable reel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-5 px-5 snap-x snap-mandatory"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-44 md:w-56 snap-start group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-velvet-200 relative overflow-hidden mb-3">
                <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/50 via-transparent to-transparent z-10" />
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-velvet-300">
                  <div className="w-3/4 h-3/4 bg-velvet-400 rounded-lg opacity-50" />
                </div>
                <p className="absolute bottom-3 left-3 right-3 z-20 font-serif text-white text-sm italic leading-tight">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
