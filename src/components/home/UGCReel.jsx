import React, { useEffect, useRef } from 'react';
import { UGC_ITEMS } from '@/data/products.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ink py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-gold">@velmorajewelry</p>
        <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {UGC_ITEMS.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[9/16] w-[220px] flex-shrink-0 overflow-hidden bg-stone/40 md:w-[280px]"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[${item.titleId}] [ugc-section-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={item.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-xl text-cream"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      <h2 id="ugc-section-title" className="sr-only">
        Styled by You — customer jewelry looks
      </h2>
    </section>
  );
}
