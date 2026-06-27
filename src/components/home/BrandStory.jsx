import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BrandStory = () => {
  const containerRef = useRef(null);
  const [imageRef, imageVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`reveal ${imageVisible ? 'visible' : ''} aspect-[4x5] overflow-hidden`}
          >
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] velmora fine jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover img-zoom"
            />
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`reveal reveal-delay-2 ${textVisible ? 'visible' : ''} py-4 md:py-8`}
          >
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text">
              Our Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold mt-4 mb-6" />
            <p id="brand-story-text" className="text-sm md:text-base text-velmora-text leading-relaxed mb-4">
              Born from a belief that luxury should be lived in, not locked away. Velmora creates demi-fine jewelry that moves with you — from morning coffee to candlelit dinners.
            </p>
            <p className="text-sm md:text-base text-velmora-text leading-relaxed mb-6">
              Each piece is crafted with 18K gold plating over sterling silver, designed to be hypoallergenic, water-resistant, and made for everyday wear. Because the best jewelry is the kind you never take off.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-velmora-gold text-velmora-gold text-xs tracking-[0.2em] uppercase font-medium hover:bg-velmora-gold hover:text-white transition-all duration-300"
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
