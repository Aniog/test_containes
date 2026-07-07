import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';
import RevealSection from '@/components/RevealSection';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            As Seen On You
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </RevealSection>
      </div>

      {/* Horizontal scroll */}
      <RevealSection delay={1}>
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative w-48 md:w-56 aspect-[9/16] flex-shrink-0 overflow-hidden rounded-sm group img-placeholder"
              >
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-espresso/70 to-transparent pt-16 pb-4 px-4">
                  <p
                    id={item.titleId}
                    className="font-serif text-sm text-white tracking-wide"
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
