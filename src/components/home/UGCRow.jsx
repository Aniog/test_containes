import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-blush">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-10 md:mb-14 px-6">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-brand-ink">Styled by You</h2>
          <p className="text-brand-warmgray text-sm mt-3">How our community wears Velmora</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-brand-sand/30 overflow-hidden">
              <img
                alt={reel.caption}
                data-strk-img-id={`ugc-${reel.id}-img-8f2a`}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent" />
              {/* Caption */}
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute bottom-4 left-4 right-4 text-white font-serif text-sm md:text-base italic tracking-wide leading-snug"
              >
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
