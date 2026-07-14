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
    <section ref={containerRef} className="py-16 md:py-24 bg-cream/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-f4g5h6"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug">
              Designed with Intention, Crafted with Care
            </h2>
            <p id="brand-story-desc" className="mt-6 text-stone leading-relaxed">
              Every Velmora piece begins as a sketch inspired by timeless femininity and modern confidence. 
              We work with skilled artisans to bring each design to life using 18K gold plating over 
              hypoallergenic metals — delivering luxury you can wear every day without compromise.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              Our mission is simple: make fine jewelry accessible. No markups from middlemen, 
              no compromises on quality. Just beautiful pieces delivered directly to you.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-gold hover:text-gold-dark uppercase tracking-wider transition-colors no-underline"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
