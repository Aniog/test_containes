import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { ugcItems } from '../../data/products';
import { useScrollReveal } from '../../lib/hooks';

export default function UGCRow() {
  const scrollRef = useRef(null);
  const { ref, isVisible } = useScrollReveal();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 240;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={(node) => { ref.current = node; containerRef.current = node; }} className="py-section-mobile md:py-section bg-sand">
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className={`flex items-end justify-between mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <p className="text-caption uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-h2 text-charcoal">As Seen On You</h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-linen flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-linen flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-charcoal/10 rounded-sm overflow-hidden group">
                <img
                  alt={item.caption}
                  data-strk-img-id={`ugc-${item.id}-b7e${item.id}d4`}
                  data-strk-img={`[ugc-caption-${item.id}] gold jewelry ${item.category} worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
                  <p
                    id={`ugc-caption-${item.id}`}
                    className="font-serif text-white text-sm italic"
                  >
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
