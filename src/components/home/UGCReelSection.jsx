import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-2">As Worn</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso tracking-wide">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-inter text-xs uppercase tracking-[0.12em] text-stone hover:text-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption} Velmora jewelry</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <p className="font-cormorant text-sm md:text-base italic text-ivory leading-tight">
                {item.caption}
              </p>
              <p className="font-inter text-[10px] text-ivory/60 mt-1">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
