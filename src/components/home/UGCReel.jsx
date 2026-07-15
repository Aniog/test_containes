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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="px-6 md:px-12 lg:px-20 mb-8">
        <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light">
          Worn by You
        </h2>
        <p id="ugc-section-subtitle" className="mt-2 text-muted text-sm">
          Real moments, real style — tag @velmora to be featured
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 scrollbar-hide">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] bg-ivory overflow-hidden group"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[ugc-caption-${item.id}] [ugc-section-subtitle] [ugc-section-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-sm text-white italic"
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
