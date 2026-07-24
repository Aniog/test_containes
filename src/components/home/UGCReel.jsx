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
    <section className="py-16 md:py-24 bg-walnut-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <div className="text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-3">Style Stories</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 tracking-wide">
            As Worn By You
          </h2>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-3 md:gap-4 px-4 overflow-x-auto scrollbar-hide pb-4">
        {ugcItems.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-reel-${index}`}
              data-strk-img={`[ugc-caption-${index}] gold jewelry fashion portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-walnut-950/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${index}`}
              className="absolute bottom-4 left-3 right-3 font-serif text-sm md:text-base italic text-cream-100"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
