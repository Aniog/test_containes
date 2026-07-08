import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-manrope text-xs tracking-[0.12em] uppercase text-ink-muted hover:text-gold transition-colors duration-300"
          >
            <span>@velmora</span>
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 snap-start overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn ear neck`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic text-ivory leading-snug"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
