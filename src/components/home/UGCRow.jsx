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
    <section ref={containerRef} className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs font-medium tracking-widest uppercase text-mist hover:text-gold transition-colors duration-300 border-b border-mist/30 pb-0.5"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-6 md:px-10 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer">
      {/* 9:16 aspect ratio container */}
      <div className="relative" style={{ paddingBottom: '177.78%' }}>
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p
            id={item.titleId}
            className="font-serif text-sm italic text-cream leading-tight mb-1"
          >
            "{item.caption}"
          </p>
          <p className="font-sans text-[10px] text-cream/60 tracking-wide">
            {item.handle}
          </p>
        </div>
      </div>
    </div>
  );
}
