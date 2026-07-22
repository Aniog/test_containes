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
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] bg-velmora-warm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-j1k2l3"
              data-strk-img="[brand-story-text] [brand-story-title] velmora fine jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-medium text-velmora-charcoal">
              Our Story
            </h2>
            <div className="hairline mt-4 mb-6" />
            <p id="brand-story-text" className="text-sm md:text-base text-velmora-muted font-sans leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, wearable, and crafted with care. Every piece is designed in-house and finished with 18K gold plating over hypoallergenic stainless steel — so it looks luxurious, feels weightless, and lasts through every moment of your day.
            </p>
            <p className="mt-4 text-sm md:text-base text-velmora-muted font-sans leading-relaxed">
              We skip the middlemen, the markups, and the excess. What you receive is honest craftsmanship at a fair price — jewelry made to be treasured, not just admired.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block text-xs uppercase tracking-nav font-sans font-medium text-velmora-gold hover:text-velmora-gold-dark transition-colors border-b border-velmora-gold pb-1"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
