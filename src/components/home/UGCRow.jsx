import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden group">
      {/* 9:16 aspect ratio */}
      <div className="aspect-[9/16] relative overflow-hidden bg-obsidian">
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            id={item.titleId}
            className="font-cormorant text-sm italic text-ivory leading-snug mb-1"
          >
            {item.caption}
          </p>
          <p className="font-manrope text-[10px] text-ivory/50 tracking-wide">
            {item.handle}
          </p>
        </div>

        {/* Hidden desc for image query */}
        <span id={item.descId} className="hidden">{item.desc}</span>
      </div>
    </div>
  );
}

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-champagne mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-manrope text-xs uppercase tracking-widest text-ivory/40 hover:text-champagne transition-colors border-b border-ivory/20 pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual density */}
        {ugcItems.slice(0, 2).map(item => (
          <UGCCard key={`${item.id}-dup`} item={{ ...item, imgId: `${item.imgId}-dup` }} />
        ))}
      </div>
    </section>
  );
}
