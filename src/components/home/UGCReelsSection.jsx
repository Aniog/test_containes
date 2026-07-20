import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCReelsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-velmora-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant font-light text-4xl md:text-5xl text-velmora-obsidian">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-inter text-xs font-medium uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors duration-300 border-b border-velmora-stone pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel strip */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-4">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-reel overflow-hidden group cursor-pointer"
          >
            {/* Reel image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={reel.titleId}
                className="font-cormorant text-base font-light italic text-velmora-white leading-snug"
              >
                "{reel.caption}"
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-velmora-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-velmora-white ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
