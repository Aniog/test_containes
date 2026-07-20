import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-wide-custom uppercase text-gold mb-3">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            #VelmoraStyle
          </h2>
          <p className="font-sans text-sm text-charcoal-muted mt-3">
            Real customers, real sparkle
          </p>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
            >
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[${item.id}-caption] gold jewelry worn on ear neck woman`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="440"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-base md:text-lg text-white leading-tight">
                    {item.caption}
                  </p>
                  <p className="font-sans text-xs text-white/70 mt-1">
                    {item.customer}
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
