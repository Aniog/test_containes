import React, { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReels() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface border-y border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center">
          Styled by You
        </h2>
        <p className="text-sm text-secondary text-center mt-2">
          Share your Velmora moments with #VelmoraWoman
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-6 md:px-10 pb-4"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] bg-primary/5 overflow-hidden group cursor-pointer"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-white text-base md:text-lg font-medium italic"
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
