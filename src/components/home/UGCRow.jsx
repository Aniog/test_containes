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
    <section className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-champagne mb-2">Community</p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal">
              As Worn by You
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-[10px] uppercase tracking-widest text-stone hover:text-champagne transition-colors hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar scroll-snap-x px-4 md:px-8 lg:px-12 pb-2"
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="scroll-snap-item flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{ width: '180px', height: '320px' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm italic text-ivory leading-snug mb-1">
                "{item.caption}"
              </p>
              <p className="font-sans text-[10px] text-ivory/60 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
