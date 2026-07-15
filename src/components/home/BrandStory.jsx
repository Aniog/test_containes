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
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1r2s3"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-light text-brand-dark tracking-wide"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-base text-brand-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful, lasting jewelry shouldn't come with a luxury markup. We work directly with artisans, using genuine 18K gold plating over sterling silver, to create pieces that feel heirloom-quality at an accessible price.
            </p>
            <p className="font-sans text-base text-brand-muted leading-relaxed mb-8">
              Every piece is designed in-house, tested for sensitivity, and crafted to be worn every day — not saved for special occasions.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold font-sans text-xs uppercase tracking-super-wide px-10 py-3.5 hover:bg-brand-gold hover:text-white transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
