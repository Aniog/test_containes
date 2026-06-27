import { useEffect, useRef } from 'react';
import { UGC_ITEMS } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCRow() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-16 bg-velmora-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-text">
          Styled by You
        </h2>
      </div>
      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
        {UGC_ITEMS.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}] [ugc-label-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-white text-sm md:text-base italic leading-snug"
              >
                {item.caption}
              </p>
              <p
                id={`ugc-label-${item.id}`}
                className="text-white/60 text-[10px] tracking-[0.15em] uppercase mt-1.5"
              >
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
