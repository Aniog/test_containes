import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#c9a96e] mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-light text-[#2c2825]">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-sans text-xs tracking-[0.12em] uppercase text-[#7a6f66] hover:text-[#c9a96e] transition-colors duration-300"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] overflow-hidden bg-[#2c2825] group cursor-pointer"
          >
            {/* Background image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={reel.titleId}
                className="font-serif text-sm italic text-[#fdfaf6] leading-snug"
              >
                {reel.caption}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-[#c9a96e]/80 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-[#1a1714] ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
