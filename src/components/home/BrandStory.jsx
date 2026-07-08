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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-title] [brand-story-desc] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-snug">
              Designed with Intention, Made to Last
            </h2>
            <p id="brand-story-desc" className="mt-6 text-taupe font-sans text-sm leading-relaxed">
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We use 18K gold plating over hypoallergenic brass and sterling silver, ensuring each piece is as kind to your skin as it is beautiful on it.
            </p>
            <p className="mt-4 text-taupe font-sans text-sm leading-relaxed">
              We believe luxury should be accessible. That's why we sell directly to you — no middlemen, no markups — just thoughtfully crafted jewelry at honest prices.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-charcoal text-sm font-sans tracking-wide border-b border-charcoal pb-0.5 hover:border-warm-gold hover:text-warm-gold transition-colors duration-300"
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
