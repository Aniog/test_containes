import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 sm:w-52 relative overflow-hidden group cursor-pointer">
      {/* 9:16 aspect ratio card */}
      <div className="relative" style={{ aspectRatio: '9/16' }}>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry worn`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p id={item.titleId} className="font-serif text-sm text-parchment italic leading-snug mb-1">
            {item.caption}
          </p>
          <p id={item.descId} className="text-[9px] tracking-widest text-gold/80 uppercase">
            {item.handle}
          </p>
        </div>

        {/* Instagram-style play indicator */}
        <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 rounded-full bg-parchment/20 backdrop-blur-sm flex items-center justify-center">
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-parchment ml-0.5" />
          </div>
        </div>
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
    <section ref={containerRef} className="py-20 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-medium">Community</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-parchment font-light">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-[10px] tracking-widest uppercase text-stone hover:text-gold transition-colors duration-300"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 3).map(item => (
          <UGCCard key={`${item.id}-repeat`} item={{ ...item, imgId: `${item.imgId}-r`, titleId: `${item.titleId}-r`, descId: `${item.descId}-r` }} />
        ))}
      </div>
    </section>
  );
}
