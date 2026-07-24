import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcCards } from '@/data/products';

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 lg:py-20 border-y border-divider bg-night/30" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-light mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-champagne">
            Styled by You
          </h2>
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-none -mx-4 px-4 snap-x snap-mandatory">
          {ugcCards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-espresso border border-divider overflow-hidden group">
                <img
                  data-strk-img-id={`ugc-reel-${card.id}`}
                  data-strk-img={`[ugc-caption-${card.id}] [ugc-product-${card.id}] jewelry on model ear neck`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={card.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p
                    id={`ugc-caption-${card.id}`}
                    className="font-serif text-sm text-champagne/90 italic"
                  >
                    {card.caption}
                  </p>
                  <p
                    id={`ugc-product-${card.id}`}
                    className="text-[10px] text-champagne/50 mt-0.5 tracking-wider uppercase"
                  >
                    {card.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
