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
    <section className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-[10px] tracking-ultra-wide uppercase text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink">
              Real Women, Real Gold
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors"
          >
            @velmora <span className="text-gold">→</span>
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.captionId}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={reel.captionId}
                className="font-cormorant text-sm italic text-ivory leading-snug"
              >
                {reel.caption}
              </p>
            </div>

            {/* Reel indicator */}
            <div className="absolute top-3 right-3">
              <div className="w-5 h-5 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}

        {/* Follow CTA card */}
        <div
          className="relative flex-shrink-0 w-44 md:w-52 bg-obsidian flex flex-col items-center justify-center gap-4 cursor-pointer group"
          style={{ aspectRatio: '9/16' }}
        >
          <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center group-hover:border-gold transition-colors">
            <span className="text-gold text-xl font-cormorant">+</span>
          </div>
          <div className="text-center px-4">
            <p className="font-cormorant text-base text-ivory mb-1">Follow Us</p>
            <p className="font-inter text-[10px] tracking-widest uppercase text-ivory/50">@velmora</p>
          </div>
        </div>
      </div>
    </section>
  );
}
