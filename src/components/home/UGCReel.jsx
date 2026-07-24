import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-linen py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-dark tracking-wide">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-velmora-text-muted hover:text-velmora-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              alt={item.product}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-velmora-cream leading-snug"
              >
                {item.caption}
              </p>
              <p
                id={item.titleId}
                className="font-inter text-[10px] uppercase tracking-widest text-velmora-gold/80 mt-1"
              >
                {item.product}
              </p>
            </div>

            {/* Instagram-style play indicator */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-5 h-5 border border-velmora-cream/60 rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-velmora-cream/80 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
