import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-surface overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c7d8e9"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-wider text-gold font-medium mb-4">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal leading-snug"
            >
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-muted leading-relaxed"
            >
              Born from a love of fine craftsmanship and accessible luxury, Velmora creates
              demi-fine jewelry that bridges the gap between costume and fine. Each piece is
              thoughtfully designed, hand-finished, and made to be worn every day — from morning
              coffee to evening cocktails.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We believe beautiful jewelry shouldn't require a special occasion. Our 18K gold-plated
              pieces are built to last, designed to layer, and priced to collect.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm text-gold tracking-wider uppercase font-medium border-b border-gold pb-0.5 hover:opacity-70 transition-opacity"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
