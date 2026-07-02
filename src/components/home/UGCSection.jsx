import { useEffect, useRef } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-px">
        <div className="text-center mb-10">
          <p className="text-overline mb-3">As Seen On You</p>
          <h2 className="font-serif text-display-sm md:text-[3.5rem] text-charcoal">
            @velmora
          </h2>
        </div>
      </div>

      {/* Horizontal scroll of vertical reels-style cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-5 md:px-8 lg:px-12 pb-4">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${item.id}-reel`}
              data-strk-img={`[ugc-caption-${item.id}] [ugc-product-${item.id}] woman wearing gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                id={`ugc-product-${item.id}`}
                className="font-sans text-[10px] uppercase tracking-[0.12em] text-gold-pale mb-1"
              >
                {item.product}
              </p>
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-body-lg text-white italic"
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
