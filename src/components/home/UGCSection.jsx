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
    <section className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-champagne mb-2">
              Community
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              As Worn By You
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs tracking-widest uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-champagne hover:border-champagne transition-colors hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
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
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm italic text-ivory leading-snug">
                "{item.caption}"
              </p>
              <p className="font-sans text-[10px] text-ivory/70 mt-1 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
