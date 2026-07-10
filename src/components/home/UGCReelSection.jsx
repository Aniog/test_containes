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
    <section className="py-16 lg:py-20 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-champagne mb-3">As Worn By You</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">The Velmora Edit</h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs tracking-wider uppercase text-stone-500 hover:text-obsidian transition-colors"
          >
            @velmora_jewelry
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 sm:w-52 lg:w-60 aspect-ugc overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn model portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic text-ivory/90 leading-snug"
              >
                {item.caption}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-7 h-7 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
