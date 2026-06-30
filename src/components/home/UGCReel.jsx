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
    <section className="py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">As Worn</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink font-light">The Velmora Edit</h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors hidden sm:flex items-center gap-2"
          >
            @velmora <span>→</span>
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 sm:w-52 lg:w-60 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry worn model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-serif text-sm italic text-ivory leading-snug"
              >
                {item.caption}
              </p>
              <span id={item.descId} className="sr-only">gold jewelry worn on model, {item.caption}</span>
            </div>

            {/* Instagram-style play indicator */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-5 h-5 border border-ivory/60 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
