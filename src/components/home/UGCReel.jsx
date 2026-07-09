import React, { useEffect, useRef } from 'react';
import { ugcSlides } from '../../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-12 md:py-16 bg-velmora-black" ref={containerRef}>
      <div className="mb-8 md:mb-10">
        <div className="container-velmora">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-2">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-white">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8" style={{ width: 'max-content' }}>
          {ugcSlides.map((slide) => (
            <div
              key={slide.id}
              className="relative w-[200px] md:w-[240px] aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                data-strk-bg-id={slide.id}
                data-strk-bg={`${slide.caption} ${slide.product} jewelry worn model`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                role="img"
                aria-label={slide.caption}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-base md:text-lg text-white italic leading-tight">
                  {slide.caption}
                </p>
                <p className="font-sans text-[10px] tracking-wider uppercase text-white/60 mt-1">
                  {slide.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
