import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-velmora-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-gold-light/60 mb-4">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">
              Worn by You
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center border border-velmora-cream/20 text-velmora-cream/60 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center border border-velmora-cream/20 text-velmora-cream/60 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-4 px-6 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="aspect-[9/16] bg-gradient-to-b from-velmora-charcoal to-velmora-dark relative overflow-hidden group">
              {/* Stock image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-velmora-gold/20 font-serif text-4xl">V</span>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-dark/80 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-velmora-cream italic leading-snug">
                  "{item.caption}"
                </p>
                <p className="font-sans text-[11px] text-velmora-cream/50 mt-2">
                  {item.username}
                </p>
              </div>

              {/* Hover shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-velmora-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}