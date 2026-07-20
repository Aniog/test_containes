import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { ugcItems } from '@/data/products';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
            #VelmoraStyle
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-text-primary">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 md:gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative w-[180px] md:w-[220px] lg:w-[260px] flex-shrink-0 overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '9/16' }}
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn ear necklace woman styling`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-3 right-3 font-serif text-base md:text-lg text-text-primary tracking-wide italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
