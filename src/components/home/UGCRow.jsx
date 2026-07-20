import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.08em] uppercase text-espresso text-center">
          As Seen On You
        </h2>
        <p className="mt-2 text-sm text-taupe tracking-wide text-center">
          Tag @velmora to be featured
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-10 pb-4">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-48 md:w-56 aspect-[9/16] relative group overflow-hidden"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] [ugc-product-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={`ugc-caption-${reel.id}`}
                className="font-serif text-white text-lg italic"
              >
                {reel.caption}
              </p>
              <p
                id={`ugc-product-${reel.id}`}
                className="text-[10px] tracking-[0.15em] uppercase text-white/80 mt-1"
              >
                {reel.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}