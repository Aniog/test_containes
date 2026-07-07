import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '../../data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-deep overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            @velmora
          </p>
          <h2 className="font-serif text-heading-lg md:text-heading-xl text-white">
            Styled by You
          </h2>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-velmora-gold transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-velmora-gold transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* UGC Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        >
          {ugcItems.map((item, i) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden group"
            >
              <img
                data-strk-img-id={`ugc-${item.id}-f2a${i}`}
                data-strk-img={`[ugc-caption-${item.id}] jewelry worn ear neck style`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-lg text-white/90 italic"
                >
                  {item.caption}
                </p>
                <p className="font-sans text-[10px] tracking-wider uppercase text-white/50 mt-1">
                  {item.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
