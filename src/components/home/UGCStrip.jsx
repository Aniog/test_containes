import React, { useEffect, useRef } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-10 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal text-center">
          #VelmoraWomen
        </h2>
        <p className="text-center text-sm text-warm-gray mt-2">Share your style with us</p>
      </div>
      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-6 lg:px-10 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] relative group cursor-pointer"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-hairline/30">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
