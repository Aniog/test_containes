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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-m7n8o9"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="3x4"
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
              className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal mb-6"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-brand-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry should be accessible, wearable, and made to last. Every piece is designed in our studio and crafted with 18K gold plating over premium materials, ensuring beauty that endures.
            </p>
            <p className="font-sans text-sm text-brand-warm-gray leading-relaxed mb-8">
              We believe in the quiet power of a well-made piece — one that becomes part of your story, your rituals, your everyday. No excess. No compromise. Just jewelry that feels right.
            </p>
            <Link
              to="/about"
              className="font-sans text-xs uppercase tracking-wide text-brand-gold hover:text-brand-gold-dark border-b border-brand-gold hover:border-brand-gold-dark pb-0.5 transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
