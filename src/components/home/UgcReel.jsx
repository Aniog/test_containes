import React, { useEffect, useRef } from 'react';
import { ugcItems } from '../../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import AnimatedSection from '../ui/AnimatedSection';

export default function UgcReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-charcoal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-10 sm:mb-14">
          <p className="text-gold-400 text-xs tracking-mega-wide uppercase font-medium mb-3">
            Styled by You
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl text-brand-100 font-light">
            #VelmoraStyle
          </h2>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-5" />
        </AnimatedSection>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 sm:w-52 aspect-[9/16] flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}] woman wearing gold jewelry ear neck close-up`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-caption-${item.id}`} className="heading-serif text-sm sm:text-base text-brand-100 italic">
                  {item.caption}
                </p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold-600/0 group-hover:bg-gold-600/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
