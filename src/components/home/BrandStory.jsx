import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="reveal relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-m1n2o3"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="reveal font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="reveal reveal-delay-2 font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-4"
            >
              At Velmora, we believe luxury should be lived in — not locked away. Each piece is crafted with 18K gold plating over sterling silver, designed to move with you from morning coffee to candlelit dinner.
            </p>
            <p className="reveal reveal-delay-3 font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-8">
              Our artisans blend timeless techniques with modern sensibility, creating jewelry that feels both heirloom and entirely now. Because the finest things in life are the ones you wear every day.
            </p>
            <Link
              to="/about"
              className="reveal reveal-delay-4 inline-block border border-brand-gold text-brand-gold px-8 py-3 font-sans text-xs tracking-super-wide uppercase hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
