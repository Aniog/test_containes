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
    <section ref={containerRef} className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 id="ugc-section-title" className="font-serif text-3xl lg:text-4xl text-charcoal text-center">
          Worn by You
        </h2>
        <p id="ugc-section-subtitle" className="mt-3 text-stone text-sm lg:text-base text-center">
          Real moments, real sparkle
        </p>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-48 sm:w-56 flex-shrink-0 group">
              <div className="aspect-[9/16] bg-charcoal/10 overflow-hidden rounded-sm">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[ugc-caption-${item.id}] [ugc-section-subtitle] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/60 to-transparent p-4">
                <p id={`ugc-caption-${item.id}`} className="font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
