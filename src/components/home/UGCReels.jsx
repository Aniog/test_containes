import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar pb-4">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden rounded-sm group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={item.captionId}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
