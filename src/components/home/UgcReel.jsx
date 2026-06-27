import React, { useEffect, useRef } from 'react';
import { Play, Instagram } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { REELS } from '@/data/products';

export default function UgcReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream border-t border-hairline">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft mb-3 flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
              @velmora
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Worn by Velmora
            </h2>
          </div>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.3em] text-ink hover:text-gold-deep transition-colors duration-300 border-b border-ink/30 hover:border-gold-deep pb-1 self-start md:self-end"
          >
            Follow the Reel
          </a>
        </div>
      </div>

      {/* Edge-to-edge horizontal scroll */}
      <div className="pb-20 md:pb-24">
        <div className="overflow-x-auto scrollbar-hide">
          <ul className="flex gap-4 md:gap-5 px-6 md:px-10 pb-2">
            {REELS.map((reel) => {
              const captionId = `reel-caption-${reel.id}`;
              return (
                <li
                  key={reel.id}
                  className="relative shrink-0 w-[62vw] sm:w-[300px] md:w-[280px] aspect-[9/16] bg-ink overflow-hidden group"
                >
                  <img
                    data-strk-img-id={reel.imgId}
                    data-strk-img={`${reel.imgQuery} [${captionId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="480"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={reel.caption}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/30" />
                  {/* Play icon top-right */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ivory/15 backdrop-blur flex items-center justify-center text-ivory">
                    <Play className="w-3 h-3 fill-current" strokeWidth={0} />
                  </div>
                  <p
                    id={captionId}
                    className="absolute bottom-5 left-5 right-5 font-serif text-xl md:text-2xl italic text-ivory leading-tight"
                  >
                    “{reel.caption}”
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
