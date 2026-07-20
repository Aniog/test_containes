import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan crafting gold jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs tracking-widest uppercase text-brand-gold">Our Story</span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal mt-4 leading-snug"
            >
              Where Craft Meets Intention
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-brand-muted leading-relaxed"
            >
              Every Velmora piece begins with a sketch and a story. We believe jewelry should be
              more than decoration — it should be a daily reminder of the moments and people you
              treasure most. Our artisans hand-finish each piece in 18K gold, creating heirloom-quality
              jewelry at an accessible price point.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Founded in 2021, we set out to bridge the gap between fine jewelry and everyday wear.
              No compromises on quality. No compromises on design.
            </p>
            <button className="mt-8 border-b border-brand-charcoal text-brand-charcoal text-sm tracking-wider uppercase pb-1 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
