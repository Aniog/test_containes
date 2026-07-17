import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-22 bg-velmora-ivory overflow-hidden">
      <div className="container-narrow mb-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold">
              @VelmoraJewelry
            </span>
            <h2 className="font-serif text-heading-lg text-velmora-charcoal mt-2">
              Styled by You
            </h2>
          </div>
        </div>
      </div>

      <div className="flex gap-4 px-6 md:px-8 overflow-x-auto scrollbar-hide pb-4">
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden group cursor-pointer"
            style={{ marginLeft: i === 0 ? 'max(0px, calc((100vw - 80rem) / 2))' : undefined }}
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img="[ugc-section-title] [ugc-section-subtitle] jewelry worn ear neck"
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-body italic text-velmora-white/90">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Hidden text refs */}
      <span id="ugc-section-title" className="sr-only">Styled by You</span>
      <span id="ugc-section-subtitle" className="sr-only">@VelmoraJewelry gold jewelry worn</span>
    </section>
  );
}
