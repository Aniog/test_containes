import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-2">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-gold transition-colors duration-300 hidden md:block"
          >
            @velmora_jewelry
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden group cursor-pointer">
      {/* 9:16 aspect ratio */}
      <div className="relative" style={{ paddingBottom: '177.78%' }}>
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.titleId}] gold jewelry worn ear neck close-up portrait`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p
            id={item.titleId}
            className="font-serif text-sm italic text-velmora-ivory leading-snug"
          >
            {item.caption}
          </p>
          <p className="font-sans text-[10px] text-velmora-ivory/60 mt-1 tracking-wide">
            {item.handle}
          </p>
        </div>
      </div>
    </div>
  );
}
