import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

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

      {/* Hidden text for image query */}
      <span id={item.titleId} className="hidden">{item.caption}</span>
      <span id={item.descId} className="hidden">{item.desc}</span>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-serif text-sm italic font-light text-cream leading-snug">
          {item.caption}
        </p>
        <p className="font-sans text-[10px] text-cream/50 mt-1 tracking-wide">
          {item.handle}
        </p>
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
    <section ref={containerRef} className="bg-obsidian py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-cream">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs tracking-widest uppercase text-cream/40 hover:text-gold transition-colors duration-300 hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Scrollable strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 3).map(item => (
          <UGCCard key={`${item.id}-dup`} item={{ ...item, imgId: `${item.imgId}-dup` }} />
        ))}
      </div>
    </section>
  );
}
