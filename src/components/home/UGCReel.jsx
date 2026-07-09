import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden group">
      <div className="aspect-[9/16] relative bg-parchment overflow-hidden">
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-serif text-sm italic text-ivory leading-snug">
            "{item.caption}"
          </p>
        </div>
      </div>
      {/* Hidden text for image query */}
      <span id={item.titleId} className="sr-only">{item.caption}</span>
      <span id={item.descId} className="sr-only">{item.desc}</span>
    </div>
  );
}

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs uppercase tracking-[0.12em] text-stone hover:text-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
