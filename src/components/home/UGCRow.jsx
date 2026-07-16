import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 mb-10 lg:mb-14">
        <p className="text-xs tracking-widest-2xl uppercase text-gold mb-3 text-center">As Seen On</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-light text-center">
          Styled by You
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-5" />
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 sm:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                data-strk-img-id={item.imageId}
                data-strk-img={`[${item.id}-caption] styled-by-you jewelry fashion`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`${item.id}-caption`} className="font-serif text-sm sm:text-base text-white/90 italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
