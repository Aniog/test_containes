import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group">
      {/* Background image */}
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
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          id={item.titleId}
          className="font-serif text-ivory text-sm italic font-light leading-snug"
        >
          {item.caption}
        </p>
      </div>

      {/* Hidden desc for image query */}
      <span id={item.descId} className="sr-only">{item.description}</span>
    </div>
  );
}

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-obsidian">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="text-xs tracking-widest uppercase text-taupe hover:text-gold transition-colors hidden md:block"
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
        {/* Duplicate for visual fullness */}
        {ugcItems.slice(0, 2).map(item => (
          <UGCCard key={`dup-${item.id}`} item={{ ...item, imgId: `${item.imgId}-dup`, titleId: `${item.titleId}-dup`, descId: `${item.descId}-dup` }} />
        ))}
      </div>
    </section>
  );
}
