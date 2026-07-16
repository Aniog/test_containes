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
        data-strk-img={`[${item.titleId}] gold jewelry worn woman portrait`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/10 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          id={item.titleId}
          className="font-cormorant text-sm italic text-ivory leading-snug mb-1"
        >
          "{item.caption}"
        </p>
        <p className="font-inter text-[10px] text-ivory/50 tracking-wide">{item.username}</p>
      </div>

      {/* Instagram-style play indicator */}
      <div className="absolute top-3 right-3 opacity-60">
        <div className="w-5 h-5 border border-ivory/60 rounded-full flex items-center justify-center">
          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-ivory ml-0.5" />
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
    <section className="bg-charcoal py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">As Seen On</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ivory tracking-wide">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-inter text-[11px] uppercase tracking-[0.14em] text-ivory/40 hover:text-gold transition-colors border-b border-ivory/20 pb-0.5 self-start md:self-auto"
          >
            @velmora.jewelry
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 2).map(item => (
          <UGCCard key={`${item.id}-dup`} item={{ ...item, imgId: `${item.imgId}-dup`, titleId: `${item.titleId}-dup` }} />
        ))}
      </div>
    </section>
  );
}
