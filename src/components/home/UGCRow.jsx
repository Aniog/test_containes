import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import products, { ugcReels } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-page">
        <div className="text-center mb-12 md:mb-14">
          <h2 id="styled-by-you-heading" className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal font-light tracking-wide">
            Styled by You
          </h2>
          <p className="mt-3 text-sm font-sans text-stone max-w-md mx-auto">
            Real women, real radiance. See how the Velmora community wears
            their favorites.
          </p>
        </div>
      </div>

      {/* Scrollable reel strip */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-cream/90 backdrop-blur shadow-md flex items-center justify-center text-charcoal hover:text-gold transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-5 md:px-10 lg:px-16 pb-2"
        >
          {ugcReels.map((reel) => {
            const product = products.find((p) => p.id === reel.productId);
            return (
              <div
                key={reel.id}
                className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative rounded-sm overflow-hidden bg-clay group"
              >
                <img
                  alt={reel.caption}
                  data-strk-img-id={reel.id}
                  data-strk-img={`[ugc-caption-${reel.id}] [styled-by-you-heading]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="440"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    id={`ugc-caption-${reel.id}`}
                    className="text-white font-serif text-sm italic"
                  >
                    {reel.caption}
                  </p>
                  {product && (
                    <p className="text-cream/80 font-sans text-[10px] uppercase tracking-wider mt-1">
                      {product.name}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-cream/90 backdrop-blur shadow-md flex items-center justify-center text-charcoal hover:text-gold transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
