import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 section-padding bg-brand-cream">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-brand-sand/30 overflow-hidden">
            <img
              alt="Velmora craftsmanship - artisan creating fine jewelry"
              data-strk-img-id="brand-story-img-8f2a"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2
              id="brand-story-title"
              className="font-serif text-2xl md:text-3xl tracking-wider text-brand-ink leading-snug"
            >
              The Art of Quiet Luxury
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-brand-warmgray text-sm md:text-base leading-relaxed mt-6"
            >
              Velmora was born from the belief that fine jewelry should feel personal, not precious. 
              Every piece is designed in our London atelier, crafted with 18K gold plate and ethically 
              sourced materials, then delivered to you in packaging as beautiful as what's inside.
            </p>
            <p className="text-brand-warmgray text-sm md:text-base leading-relaxed mt-4">
              We create demi-fine jewelry that moves with you — from morning coffee to evening champagne. 
              Timeless enough to pass down, accessible enough to collect.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 text-xs uppercase tracking-widest text-brand-gold-dark hover:text-brand-gold border-b border-brand-gold pb-2 transition-colors font-medium"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
