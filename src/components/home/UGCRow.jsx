import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream-100">
      <div className="text-center mb-10">
        <p className="section-subheading">STYLED BY YOU</p>
        <h2 className="section-heading mt-2">As Seen On</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-cream-200 rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] selfie mirror warm gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.product}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-950/50 via-transparent to-transparent" />
              <p
                className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm italic"
                id={`ugc-caption-${item.id}`}
              >
                {item.caption}
              </p>
            </div>
            <p className="product-name text-xs mt-2 text-deep-700 text-center">{item.product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
