import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-28 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-body] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p
              id="brand-story-body"
              className="font-inter text-sm text-charcoal leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-inter text-sm text-charcoal leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. We believe in accessible luxury — jewelry that feels like an heirloom, priced for real life.
            </p>
            <Link
              to="/shop"
              className="inline-block font-inter text-xs tracking-[0.12em] uppercase text-charcoal border-b border-charcoal/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Discover Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
