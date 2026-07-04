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
    <section className="py-16 lg:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-gold mb-2">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-velmora-text-dark">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:block font-manrope text-xs tracking-widest uppercase text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-sand pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map(item => (
          <article
            key={item.id}
            className="relative flex-shrink-0 w-[200px] sm:w-[220px] aspect-[9/16] overflow-hidden snap-start group cursor-pointer"
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-cormorant text-base italic text-velmora-text-light leading-tight"
              >
                {item.caption}
              </p>
              <p className="font-manrope text-[10px] text-velmora-gold mt-1 tracking-wider">
                {item.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
