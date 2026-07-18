import React from 'react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function UGCReel() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-velmora-warm-white fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 px-5 md:px-8">
          <p className="font-sans text-caption uppercase tracking-mega-wide text-velmora-gold mb-3">
            #VelmoraStyle
          </p>
          <h2 className="font-serif text-heading-1 md:text-heading-1 text-velmora-charcoal">
            As Seen on You
          </h2>
        </div>

        {/* Reel strip */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-5 md:px-8 pb-4 snap-x snap-mandatory"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-velmora-ivory overflow-hidden group">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.captionId}] jewelry worn on ear neck model`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-velmora-black/60 to-transparent">
                  <p
                    id={item.captionId}
                    className="font-serif text-body text-velmora-cream italic"
                  >
                    {item.caption}
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
