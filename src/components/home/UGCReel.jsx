import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

function UGCCard({ item }) {
  return (
    <article className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group">
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.description}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          id={item.titleId}
          className="font-serif text-sm font-light italic text-parchment leading-snug"
        >
          {item.caption}
        </p>
      </div>

      {/* Hidden desc for image query */}
      <span id={item.descId} className="sr-only">{item.description}</span>
    </article>
  );
}

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[11px] font-medium uppercase tracking-widest text-muted border-b border-muted pb-0.5 hover:text-gold hover:border-gold transition-colors hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 2).map(item => (
          <UGCCard key={`${item.id}-repeat`} item={{ ...item, imgId: `${item.imgId}-r`, titleId: `${item.titleId}-r`, descId: `${item.descId}-r` }} />
        ))}
      </div>
    </section>
  );
}
