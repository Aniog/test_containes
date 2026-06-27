import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-warm-charcoal">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
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
          <div>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-warm-tan leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece
              with the same care and intention as the world's top maisons — at a price that invites
              you to collect, gift, and wear every day.
            </p>
            <p className="text-sm md:text-base text-warm-tan leading-relaxed mb-8">
              Every design begins with a sketch, is refined through dozens of prototypes, and is
              finished by hand. We use only 18K gold plating over hypoallergenic bases, so beauty
              never comes at the cost of comfort.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold text-xs font-sans font-medium uppercase tracking-[0.12em] px-8 py-3 hover:bg-gold/10 transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
