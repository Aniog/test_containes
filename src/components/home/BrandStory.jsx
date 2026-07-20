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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d3e4f5"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-title"
              className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-subtitle"
              className="font-sans text-sm text-brand-warm-gray leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts
              demi-fine pieces that bridge the gap between everyday wear and luxury.
              Each piece is designed in our studio and finished with 18K gold plating
              for lasting brilliance.
            </p>
            <p className="font-sans text-sm text-brand-warm-gray leading-relaxed mb-8">
              We source only hypoallergenic materials, ensuring every piece is as gentle
              on your skin as it is beautiful. From sketch to final polish, every detail
              is considered — because you deserve jewelry that's crafted to be treasured.
            </p>
            <Link
              to="/about"
              className="font-sans text-xs tracking-wide uppercase border border-brand-gold text-brand-gold px-8 py-3 hover:bg-brand-gold hover:text-white transition-colors duration-300 inline-block"
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
