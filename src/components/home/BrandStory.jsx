import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-u0v1w2"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan crafting gold jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs uppercase tracking-wide-xl text-brand-gold font-medium">Our Story</span>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal mt-4 leading-snug">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p id="brand-story-desc" className="mt-6 text-sm md:text-base text-brand-warm-gray leading-relaxed">
              Born from a love of understated luxury, Velmora creates demi-fine jewelry that bridges the gap between costume and fine. Each piece is thoughtfully designed in our London studio and crafted with 18K gold plating over hypoallergenic bases — so you never have to choose between beauty and comfort.
            </p>
            <p className="mt-4 text-sm md:text-base text-brand-warm-gray leading-relaxed">
              We believe jewelry should be an everyday indulgence, not a once-a-year splurge. That's why we work directly with you — no middlemen, no markups — just beautiful pieces at honest prices.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm uppercase tracking-wide-xl font-medium text-brand-charcoal border-b border-brand-charcoal pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
