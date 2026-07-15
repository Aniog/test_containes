import React, { useEffect, useRef } from 'react';
import strkImgConfig from '@/strk-img-config.json';
import { ImageHelper } from '@strikingly/sdk';

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ugcItems = [
    {
      id: 'ugc-1',
      caption: '"My everyday earrings — I never take them off." — @sarah.m',
      query: 'gold ear cuff jewelry woman wearing closeup',
    },
    {
      id: 'ugc-2',
      caption: '"The perfect gift for myself." — @emma.l',
      query: 'gold necklace woman elegant portrait',
    },
    {
      id: 'ugc-3',
      caption: '"These huggies are everything." — @jessica.r',
      query: 'gold huggie earrings woman ear detail',
    },
    {
      id: 'ugc-4',
      caption: '"Layered with my favorites." — @olivia.k',
      query: 'gold jewelry layered necklaces woman',
    },
    {
      id: 'ugc-5',
      caption: '"Dinner-ready in seconds." — @maria.t',
      query: 'gold drop earrings woman evening',
    },
    {
      id: 'ugc-6',
      caption: '"The set my sister loved." — @lily.w',
      query: 'gold jewelry set gift box woman',
    },
  ];

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-3">
            As Worn By You
          </h2>
          <p className="font-sans text-sm text-muted-foreground">
            Real women, real moments, real Velmora.
          </p>
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 sm:w-56 relative group"
            >
              {/* 9:16 image */}
              <div className="aspect-[9/16] bg-secondary rounded-sm overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  data-strk-bg-id={item.id}
                  data-strk-bg={item.query}
                  data-strk-bg-ratio="9x16"
                  data-strk-bg-width="400"
                />

                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-12">
                  <p className="font-serif text-sm text-white/90 italic leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCRow;
