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
    <section ref={containerRef} className="py-16 md:py-20 bg-charcoal-800 overflow-hidden">
      <div className="container-narrow mb-10">
        <div className="text-center">
          <h2 className="heading-section text-cream-100" id="ugc-title">
            As Seen On You
          </h2>
          <p className="text-sm text-charcoal-300 mt-3" id="ugc-subtitle">
            Tag @velmora to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] relative overflow-hidden rounded-lg"
            style={{ aspectRatio: '9/16' }}
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img="woman wearing gold jewelry close up ear neck elegant lifestyle"
              data-strk-img-ratio="9x16"
              data-strk-img-width="440"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm md:text-base text-cream-100 italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
