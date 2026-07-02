import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-velmora-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-obsidian font-light">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-ash hover:text-velmora-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-serif text-sm italic text-velmora-warm-white leading-snug"
              >
                {item.caption}
              </p>
            </div>

            {/* Instagram-style play indicator */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-5 h-5 border border-velmora-warm-white/60 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-velmora-warm-white/80 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
