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
              data-strk-img-id="brand-story-img-j0k1l2"
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
              className="font-serif text-3xl md:text-4xl tracking-extra-wide text-brand-charcoal"
            >
              The Art of
              <br />
              Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base font-sans font-light text-brand-warm-gray leading-relaxed mb-4"
            >
              At Velmora, we believe luxury should be lived in — not locked away. Each piece is crafted with
              meticulous attention to detail, using 18K gold plating over hypoallergenic bases, so you can
              wear beauty every single day.
            </p>
            <p className="text-sm md:text-base font-sans font-light text-brand-warm-gray leading-relaxed mb-8">
              From our studio to your jewelry box, every design passes through the hands of artisans who
              understand that true elegance lies in restraint.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold font-sans text-xs font-semibold tracking-super-wide uppercase px-10 py-3.5 hover:bg-brand-gold hover:text-white transition-colors duration-300"
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
