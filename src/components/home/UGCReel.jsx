import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light text-center">
          Worn by You
        </h2>
        <p id="ugc-subtitle" className="mt-3 text-stone text-sm md:text-base font-sans text-center">
          Real moments, real gold
        </p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start relative group"
          >
            <div className="aspect-[9/16] bg-ivory overflow-hidden relative">
              <img
                data-strk-img-id={`ugc-${item.id}-img-c3d4`}
                data-strk-img={`[ugc-caption-${item.id}] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
