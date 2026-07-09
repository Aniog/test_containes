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

      {/* Hidden text for image query */}
      <span id={item.titleId} className="hidden">{item.caption}</span>
      <span id={item.descId} className="hidden">{item.desc}</span>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/10 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-serif text-sm italic text-ivory leading-tight mb-1">
          "{item.caption}"
        </p>
        <p className="font-sans text-[10px] text-ivory/60 tracking-wide">
          {item.handle}
        </p>
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

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-2">As Worn By You</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
              The Velmora Community
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-widest-md font-medium text-stone hover:text-gold transition-colors border-b border-stone hover:border-gold pb-0.5 self-start md:self-auto"
          >
            @velmora.jewelry
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
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
