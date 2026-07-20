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
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d7e8f9"
              data-strk-img="[brand-story-text] [brand-story-heading] jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide mb-6">
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-6" />
            <p id="brand-story-text" className="text-sm md:text-base text-brand-muted font-sans leading-relaxed mb-4">
              Velmora was born from a simple belief: that luxury shouldn't be exclusive. Every piece in our collection is crafted with the same care and attention as fine jewelry — 18K gold plating, hypoallergenic materials, and timeless design — at a price that makes everyday elegance possible.
            </p>
            <p className="text-sm md:text-base text-brand-muted font-sans leading-relaxed mb-8">
              From our studio to your jewelry box, each piece passes through the hands of artisans who believe that the details matter. Because you do.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold text-xs font-sans uppercase tracking-ultra-wide px-8 py-3 hover:bg-brand-gold hover:text-white transition-all duration-300"
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
