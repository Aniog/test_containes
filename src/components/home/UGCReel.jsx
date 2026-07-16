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
    <section className="py-16 md:py-20 bg-cream border-t border-blush">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-manrope uppercase tracking-widest text-gold mb-2">Community</p>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl text-charcoal">
              As Worn by You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-xs font-manrope uppercase tracking-widest text-stone hover:text-gold transition-colors border-b border-stone/30 pb-0.5"
          >
            @velmora
          </a>
        </div>

        {/* Horizontal scroll reel */}
        <div
          ref={containerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
              />

              {/* Hidden text for image query */}
              <span id={item.titleId} className="sr-only">{item.caption}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-cormorant text-sm italic text-white/90 leading-tight">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
