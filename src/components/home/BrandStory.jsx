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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mx-auto md:mx-0 mt-4" />
            <p
              id="brand-story-text"
              className="mt-6 text-sm md:text-base text-brand-muted font-sans leading-relaxed"
            >
              Born from a belief that luxury should be lived in, not locked away. Velmora crafts demi-fine jewelry with 18K gold plating and ethically sourced materials — pieces designed to move with you, from morning coffee to candlelit dinners. Every detail is intentional. Every piece, a quiet statement.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 text-xs tracking-extra-wide uppercase font-sans font-medium border border-brand-gold text-brand-gold px-8 py-3 hover:bg-brand-gold hover:text-white transition-all duration-300"
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
