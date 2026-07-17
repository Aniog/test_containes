import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden Hour Glow', query: 'woman wearing gold earrings golden hour close-up portrait' },
  { id: 'ugc-2', caption: 'Everyday Elegance', query: 'gold necklace on woman neck minimal style close-up' },
  { id: 'ugc-3', caption: 'Stack & Style', query: 'multiple gold huggie earrings ear styling close-up' },
  { id: 'ugc-4', caption: 'Date Night Ready', query: 'woman wearing gold jewelry evening look warm lighting' },
  { id: 'ugc-5', caption: 'Self-Love Gift', query: 'gold jewelry gift box opening luxury unboxing' },
  { id: 'ugc-6', caption: 'Morning Ritual', query: 'woman putting on gold earrings mirror morning light' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 mb-10">
        <h2 className="heading-serif text-3xl md:text-4xl text-espresso mb-2">
          Styled by You
        </h2>
        <p className="text-taupe text-sm font-sans">
          Tag @velmora to be featured.
        </p>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-5 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-40 md:w-48 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <div
                data-strk-bg-id={item.id}
                data-strk-bg={item.query}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                className="absolute inset-0 bg-gradient-to-b from-espresso/20 via-transparent to-espresso/70"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-sm text-ivory/30 tracking-ultra-wide uppercase">
                    Velmora
                  </span>
                </div>
              </div>

              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-serif text-sm md:text-base text-ivory/90 leading-snug">
                  {item.caption}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
