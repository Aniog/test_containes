import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k1l2m3"
              data-strk-img="[brand-story-desc] [brand-story-title] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-snug">
              Designed with Intention, Crafted with Care
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted font-sans text-sm md:text-base leading-relaxed">
              Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We work with skilled artisans to bring each design to life in 18K gold-plated brass and sterling silver — materials chosen for their warmth, durability, and skin-friendly properties.
            </p>
            <p className="mt-4 text-muted font-sans text-sm md:text-base leading-relaxed">
              Our mission is simple: to make fine jewelry accessible without compromising on quality or design. No markups, no middlemen — just beautiful pieces delivered directly to you.
            </p>
            <span className="inline-block mt-8 text-gold font-sans text-sm uppercase tracking-wider cursor-pointer hover:text-gold-dark transition-colors">
              Our Story →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
