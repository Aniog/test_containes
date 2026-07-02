import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-linen">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Worn by You</h2>
          <p className="mt-3 text-stone text-sm md:text-base">Real moments, real jewelry</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0">
              <div className="aspect-[9/16] bg-charcoal/10 overflow-hidden relative">
                <img
                  data-strk-img-id={`ugc-${item.id}-x7y8z9`}
                  data-strk-img={`[ugc-caption-${item.id}] [ugc-product-${item.id}] woman wearing gold jewelry`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p id={`ugc-caption-${item.id}`} className="font-serif text-sm text-white italic">
                    "{item.caption}"
                  </p>
                  <p id={`ugc-product-${item.id}`} className="text-xs text-white/70 mt-1">
                    {item.productRef}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
