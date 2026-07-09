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
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-j4k5l6"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan jewelry crafting"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-tight"
            >
              Designed with Intention
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-base text-muted-fg leading-relaxed"
            >
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We believe luxury should be accessible — that you shouldn't have to choose between quality and price.
            </p>
            <p className="mt-4 text-base text-muted-fg leading-relaxed">
              Our 18K gold-plated demi-fine jewelry is crafted to last, designed to layer, and made to become part of your everyday story.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium uppercase tracking-widest text-gold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors duration-300 no-underline"
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
