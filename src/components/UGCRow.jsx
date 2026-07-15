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
    <section ref={containerRef} className="py-16 lg:py-24 bg-warm-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="heading-serif text-3xl md:text-4xl">As Seen On You</h2>
          <p className="text-taupe text-sm mt-2 font-sans">Tag <span className="text-gold font-medium">@velmorajewelry</span> to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide">
        <div className="flex gap-4 md:gap-6" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] flex-shrink-0 bg-warm-dark rounded-sm overflow-hidden group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Customer wearing Velmora jewelry"
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white leading-tight italic"
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