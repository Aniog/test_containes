import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-y8z9a0"
              data-strk-img="[brand-story-title] [brand-story-desc] jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <span className="text-xs tracking-widest uppercase text-brand-gold font-sans font-medium">Our Story</span>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal mt-4 leading-snug">
              Where Timeless Craft Meets Modern Grace
            </h2>
            <p id="brand-story-desc" className="mt-6 text-sm md:text-base text-brand-slate leading-relaxed">
              Born from a love of understated elegance, Velmora creates demi-fine jewelry that bridges the gap between everyday wear and heirloom quality. Each piece is thoughtfully designed and meticulously crafted with 18K gold plating over hypoallergenic metals — because luxury should never compromise comfort.
            </p>
            <p className="mt-4 text-sm md:text-base text-brand-slate leading-relaxed">
              We believe jewelry should tell a story. Whether it's a gift for someone you love or a quiet celebration of yourself, every Velmora piece is crafted to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-widest uppercase text-brand-charcoal border-b border-brand-charcoal pb-0.5 hover:text-brand-gold hover:border-brand-gold transition-colors font-sans font-medium"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
