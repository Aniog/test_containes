import React, { useRef, useEffect } from 'react';
import { ugcItems } from '../../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function UGCCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-charcoal overflow-hidden" ref={containerRef}>
      <div className="section-padding mb-10">
        <div className="text-center">
          <p className="font-sans text-overline uppercase tracking-mega-wide text-gold mb-3">
            #VelmoraStyle
          </p>
          <h2 className="font-serif text-heading-2 md:text-heading-1 text-white">
            Worn & Loved
          </h2>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              <img
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                data-strk-img-id={item.id}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />

              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 pt-12">
                <p className="font-serif text-base text-white/90 italic">
                  {item.caption}
                </p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
