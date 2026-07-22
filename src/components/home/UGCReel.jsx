import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-charcoal text-center">
          Worn by You
        </h2>
        <p className="mt-3 text-sm text-muted font-sans text-center">
          Real moments, real gold.
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-ivory overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[ugc-caption-${item.id}] gold jewelry on woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-4">
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-sm italic text-cream"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
