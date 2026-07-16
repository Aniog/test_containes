import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-3 font-medium">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs uppercase tracking-widest-md text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200 hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 snap-start group cursor-pointer"
          >
            {/* 9:16 aspect ratio card */}
            <div className="relative overflow-hidden bg-velmora-obsidian" style={{ aspectRatio: '9/16' }}>
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] gold jewelry worn on ear neck model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.85) 0%, rgba(26,23,20,0.2) 50%, transparent 100%)' }}
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={item.titleId}
                  className="font-cormorant text-sm italic text-velmora-text-light leading-snug mb-1"
                >
                  "{item.caption}"
                </p>
                <p className="font-manrope text-[10px] text-velmora-gold/80 tracking-wide">
                  {item.handle}
                </p>
              </div>

              {/* Instagram-style play indicator */}
              <div className="absolute top-3 right-3 opacity-60">
                <div className="w-5 h-5 border border-white/60 rounded-sm flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
