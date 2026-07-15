import React, { useRef, useEffect } from 'react';
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
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b3c4d5"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal leading-tight">
              Designed with Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-brand-muted leading-relaxed">
              Every Velmora piece begins as a sketch inspired by the quiet beauty of everyday moments. 
              We believe jewelry should feel as effortless as it looks — crafted from premium materials, 
              designed to last, and priced to be accessible without compromise.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              From our studio to your jewelry box, each piece is thoughtfully created for the modern woman 
              who values quality, sustainability, and timeless design.
            </p>
            <a href="#" className="mt-8 inline-block text-sm text-brand-charcoal font-medium underline underline-offset-4 hover:text-brand-gold transition-colors">
              Our Story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
