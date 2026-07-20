import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 lg:w-52 relative overflow-hidden group">
      {/* 9:16 aspect ratio card */}
      <div className="aspect-[9/16] relative overflow-hidden bg-stone-pale">
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.captionId}] gold jewelry worn on ear neck woman`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            id={item.captionId}
            className="font-serif text-ivory text-sm font-light italic leading-snug mb-1"
          >
            "{item.caption}"
          </p>
          <p className="text-ivory/60 text-[10px] font-sans tracking-wide">
            {item.handle}
          </p>
        </div>

        {/* Reel play icon overlay */}
        <div className="absolute top-3 right-3 opacity-60">
          <svg className="w-4 h-4 text-ivory fill-ivory" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
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
    <section className="py-20 lg:py-24 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal font-light">
              The Velmora Edit
            </h2>
          </div>
          <p className="hidden lg:block text-xs text-stone font-sans uppercase tracking-widest">
            @velmora
          </p>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="px-6 lg:px-12">
        <div className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide pb-2">
          {ugcItems.map(item => (
            <UGCCard key={item.id} item={item} />
          ))}
          {/* Duplicate for visual fullness */}
          {ugcItems.slice(0, 2).map(item => (
            <UGCCard key={`dup-${item.id}`} item={{ ...item, imgId: `${item.imgId}-dup` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
