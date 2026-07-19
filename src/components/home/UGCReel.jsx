import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'gold earrings on woman ear closeup warm light' },
  { id: 'ugc-2', caption: 'Everyday elegance', query: 'gold necklace on woman neck delicate jewelry' },
  { id: 'ugc-3', caption: 'Stack & layer', query: 'layered gold jewelry huggie earrings ear stack' },
  { id: 'ugc-4', caption: 'Gift-worthy', query: 'luxury jewelry gift box gold necklace earrings' },
  { id: 'ugc-5', caption: 'Self-purchase love', query: 'woman wearing gold pendant necklace portrait' },
  { id: 'ugc-6', caption: 'Crystal dreams', query: 'crystal earrings sparkling jewelry closeup' },
  { id: 'ugc-7', caption: 'Minimal chic', query: 'minimalist gold huggie earrings woman ear' },
  { id: 'ugc-8', caption: 'Statement piece', query: 'gold filigree earrings vintage style jewelry' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-brand-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-charcoal">
            Styled by You
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden rounded-sm group cursor-pointer"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[${item.id}-caption] jewelry gold earrings necklace woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-near-black/60 via-transparent to-transparent" />
            <p
              id={`${item.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white/90 italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
