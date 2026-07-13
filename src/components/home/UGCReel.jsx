import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden rounded-sm group">
      {/* 9:16 aspect ratio container */}
      <div className="relative" style={{ paddingBottom: '177.78%' }}>
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry worn on model`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/10 to-transparent" />

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            id={item.titleId}
            className="font-serif text-sm italic text-ivory leading-snug"
          >
            {item.caption}
          </p>
          <p
            id={item.descId}
            className="font-sans text-[11px] text-ivory/60 mt-1 tracking-wide"
          >
            {item.handle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold font-semibold mb-2">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-light">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center font-sans text-xs tracking-widest uppercase font-semibold text-muted hover:text-gold transition-colors border-b border-muted hover:border-gold pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
