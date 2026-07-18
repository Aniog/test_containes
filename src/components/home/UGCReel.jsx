import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            As Seen On You
          </h2>
          <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4"
      >
        <div className="flex gap-4 mx-auto">
          {ugcItems.map((item, i) => (
            <div
              key={item.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden group`}
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-brand-ivory tracking-wide"
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
