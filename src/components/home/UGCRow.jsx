import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'woman wearing gold earrings natural light' },
  { id: 'ugc-2', caption: 'Stack & layer', query: 'gold huggie earrings closeup ear stack' },
  { id: 'ugc-3', caption: 'Date night ready', query: 'woman wearing gold necklace evening look' },
  { id: 'ugc-4', caption: 'Everyday elegance', query: 'gold jewelry on skin closeup editorial' },
  { id: 'ugc-5', caption: 'Gift yourself', query: 'jewelry unboxing luxury gift box gold' },
  { id: 'ugc-6', caption: 'Morning ritual', query: 'woman putting on gold earrings mirror' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-14 md:py-20 bg-ivory-100">
      <div className="container-wide px-6 md:px-12 lg:px-20 mb-8">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-2">
          Community
        </p>
        <h2 className="font-serif text-display-sm md:text-display text-warm-900">
          #VelmoraStyle
        </h2>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide gap-4 px-6 md:px-12 lg:px-20 pb-4 snap-x snap-mandatory">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[ugc-caption-${index}] Velmora gold jewelry editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${index}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-white italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
