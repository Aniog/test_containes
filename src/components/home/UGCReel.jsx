import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 sm:w-52 aspect-[9/16] overflow-hidden group">
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          id={item.titleId}
          className="font-serif text-sm italic text-ivory leading-snug"
        >
          {item.caption}
        </p>
      </div>

      {/* Hidden desc for image query */}
      <span id={item.descId} className="sr-only">{item.desc}</span>
    </div>
  );
}

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 lg:py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-2">
              @velmora
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-obsidian">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex font-sans text-xs font-semibold uppercase tracking-widest text-stone hover:text-gold transition-colors items-center gap-1.5"
          >
            Follow Us →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 px-6 lg:px-8 overflow-x-auto scroll-hide pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 3).map(item => (
          <UGCCard key={`${item.id}-r`} item={{ ...item, imgId: `${item.imgId}-r`, titleId: `${item.titleId}-r`, descId: `${item.descId}-r` }} />
        ))}
      </div>
    </section>
  );
}
