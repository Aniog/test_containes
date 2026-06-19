import React, { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function UGCRow() {
  const containerRef = useRef(null);
  const [sectionRef, revealed] = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-velmora-charcoal transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div ref={containerRef}>
        <div className="max-w-content mx-auto px-5 md:px-8 mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream font-light tracking-wide">
            As Seen On You
          </h2>
          <p className="mt-2 font-serif text-base text-velmora-warm-gray italic">
            Real style, real moments
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-5 md:px-8 pb-4" role="list" aria-label="Customer style gallery">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 md:w-56 aspect-[9x16] overflow-hidden group"
              role="listitem"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p id={item.captionId} className="font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
