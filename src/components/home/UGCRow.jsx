import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcContent } from '@/data/products';

const UGCRow = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-velmora-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Real Moments
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative rounded-sm overflow-hidden group"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`UGC ${item.id}`}
              className="w-full h-full object-cover"
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-sm md:text-base text-white italic"
              >
                {item.caption}
              </p>
              <p className="font-sans text-[10px] text-white/60 mt-1 tracking-wider">
                {item.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
