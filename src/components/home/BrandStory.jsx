import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide mb-6"
            >
              The Art of Everyday Luxury
            </h2>
            <p
              id="brand-story-text"
              className="text-brand-muted font-sans text-sm leading-relaxed mb-4"
            >
              At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. Each piece is crafted with the same attention to detail as high jewelry — 18K gold plating, ethically sourced materials, and finishes that endure — but designed to be worn every day.
            </p>
            <p className="text-brand-muted font-sans text-sm leading-relaxed mb-8">
              From our studio to your jewelry box, every Velmora piece carries a story of craftsmanship, intention, and quiet confidence.
            </p>
            <Link
              to="/about"
              className="btn-outline text-xs"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
