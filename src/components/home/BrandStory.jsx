import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-title] [brand-story-subtitle] jewelry artisan hands gold craft editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 md:pl-4">
            <p className="font-sans text-caption uppercase tracking-ultra-wide text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-headline md:text-display text-charcoal mb-6"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="font-sans text-body md:text-sub text-charcoal-muted mb-4 leading-relaxed"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels
              as special as she is — without the luxury markup. We design pieces that bridge
              the gap between fine and fashion, using 18K gold plating over surgical-grade
              materials for lasting quality.
            </p>
            <p className="font-sans text-body md:text-sub text-charcoal-muted mb-8 leading-relaxed">
              Each piece is thoughtfully designed, rigorously tested for skin safety, and
              crafted to be worn day after day. Because true luxury isn't about the price
              tag — it's about how it makes you feel.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-caption uppercase tracking-ultra-wide text-charcoal hover:text-gold transition-colors duration-300 border-b border-charcoal/30 hover:border-gold/50 pb-1"
            >
              Read Our Story
              <span className="text-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
