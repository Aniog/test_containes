import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCReels() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-white border-y border-hairline">
      <div className="max-w-content mx-auto px-6 lg:px-12 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-text-primary">As Worn By You</h2>
        <p className="font-sans text-sm text-text-secondary mt-2">
          Tag @velmorajewelry to be featured
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden snap-start group cursor-pointer"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.title}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 id={reel.titleId} className="font-serif text-base text-white">
                {reel.title}
              </h3>
              <p id={reel.descId} className="font-sans text-xs text-white/80 mt-1">
                {reel.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
