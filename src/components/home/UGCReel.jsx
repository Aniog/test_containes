import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-400 mb-2">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-cream-100 tracking-wide">
              Styled by You
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-charcoal-700 text-cream-400 hover:border-gold-500 hover:text-gold-400 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-charcoal-700 text-cream-400 hover:border-gold-500 hover:text-gold-400 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[250px] aspect-[9/16] relative group snap-start"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-lg text-white italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
