import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'My everyday go-to',
    author: '@sarah.m',
    query: 'gold hoop earrings worn on ear close up warm skin tone',
  },
  {
    id: 'ugc-2',
    caption: 'The perfect layering piece',
    author: '@emma.l',
    query: 'gold necklace on neck close up delicate chain pendant',
  },
  {
    id: 'ugc-3',
    caption: 'Obsessed with these huggies',
    author: '@jessica.k',
    query: 'gold huggie earrings on ear close up warm lighting',
  },
  {
    id: 'ugc-4',
    caption: 'Gift for my sister — she loved it',
    author: '@maya.r',
    query: 'gold jewelry gift box open elegant packaging',
  },
  {
    id: 'ugc-5',
    caption: 'Elevates every outfit',
    author: '@olivia.w',
    query: 'gold filigree earrings on model side profile warm light',
  },
  {
    id: 'ugc-6',
    caption: 'Bridal party gifts ✓',
    author: '@lisa.t',
    query: 'multiple gold jewelry pieces arranged on silk fabric',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-cream overflow-hidden">
      <div className="container-page">
        {/* Section header */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-muted font-sans mb-3">
            #VelmoraStyle
          </p>
          <h2 className="heading-serif text-2xl md:text-4xl text-charcoal">
            As Seen On You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto scrollbar-hide px-4 md:px-8">
        <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative w-[200px] md:w-[240px] h-[320px] md:h-[380px] rounded-lg overflow-hidden flex-shrink-0 group"
            >
              {/* Image */}
              <div
                data-strk-bg-id={`ugc-${item.id}`}
                data-strk-bg={`[ugc-caption-${item.id}] ${item.query}`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                className="absolute inset-0 bg-stone-200 bg-cover bg-center"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-white text-base md:text-lg leading-snug"
                >
                  "{item.caption}"
                </p>
                <span className="text-xs text-white/70 mt-1 block">{item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
