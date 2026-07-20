import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-brand-sand overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b8c9d0"
              data-strk-img="[brand-story-desc] [brand-story-title] jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="font-sans text-[10px] uppercase tracking-wide-xl text-brand-gold">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal font-light leading-tight"
            >
              Where Craft Meets Intention
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 font-sans text-sm md:text-base text-brand-muted leading-relaxed"
            >
              Every Velmora piece begins with a sketch and a story. We believe jewelry should be more than decoration — it should be a daily reminder of the moments, milestones, and quiet joys that shape who you are.
            </p>
            <p className="mt-4 font-sans text-sm md:text-base text-brand-muted leading-relaxed">
              Our demi-fine collections are crafted with 18K gold plating over sterling silver, designed to be worn every day and treasured for years to come.
            </p>
            <span className="inline-block mt-8 font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal border-b border-brand-charcoal pb-1 cursor-pointer hover:border-brand-gold hover:text-brand-gold transition-colors">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
