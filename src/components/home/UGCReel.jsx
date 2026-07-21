import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { ugcReels } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-foreground">
            As Seen On You
          </h2>
          <p className="text-foreground-muted text-sm mt-3">
            Tag <span className="text-accent font-medium">@velmorajewelry</span> to be featured
          </p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-2" style={{ minWidth: 'max-content' }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] bg-muted overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={reel.caption}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-xs md:text-sm font-serif italic leading-relaxed">
                  &ldquo;{reel.caption}&rdquo;
                </p>
              </div>
              <div className="absolute top-3 right-3">
                <Heart className="w-4 h-4 text-white/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}