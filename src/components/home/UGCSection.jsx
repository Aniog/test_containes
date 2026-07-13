import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-widest uppercase font-sans font-medium text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-xs tracking-widest uppercase font-sans font-medium text-muted hover:text-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto ugc-scroll px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn woman close up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-serif text-sm italic text-cream/90 leading-snug"
              >
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
