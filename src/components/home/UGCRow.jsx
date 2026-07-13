import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-velmora-linen overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-text-primary">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs tracking-[0.2em] uppercase text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-text-muted/30 hover:border-velmora-gold pb-0.5"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 md:w-52 lg:w-60 aspect-reel overflow-hidden group cursor-pointer">
      {/* Background image */}
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.titleId}] gold jewelry worn woman`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          id={item.titleId}
          className="font-serif text-sm italic text-velmora-cream leading-snug mb-1"
        >
          "{item.caption}"
        </p>
        <p className="font-sans text-[10px] tracking-[0.1em] text-velmora-cream/60">
          {item.handle}
        </p>
      </div>

      {/* Instagram icon overlay */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-6 h-6 bg-velmora-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <span className="text-velmora-cream text-[10px]">♡</span>
        </div>
      </div>
    </div>
  );
}
