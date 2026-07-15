import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UgcReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 mb-8 md:mb-12">
        <p className="text-xs uppercase tracking-[0.16em] text-gold font-medium mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base">
          Styled by You
        </h2>
      </div>

      <div className="overflow-x-auto ugc-scroll">
        <div className="flex gap-4 md:gap-5 px-5 md:px-8 lg:px-12 pb-2">
          {ugcReels.map((reel) => (
            <article
              key={reel.id}
              className="relative flex-shrink-0 w-[170px] md:w-[220px] aspect-[9/16] overflow-hidden group"
            >
              <span id={`ugc-query-${reel.id}`} className="sr-only" aria-hidden="true">
                {reel.query}
              </span>
              <img
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[ugc-query-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="font-serif text-lg md:text-xl text-ivory italic">
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
