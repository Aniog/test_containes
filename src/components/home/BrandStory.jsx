import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-surface-cream" ref={containerRef}>
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-artisan-7k2m"
              data-strk-img="artisan hands crafting gold jewelry workshop warm light"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Gold border accent */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <p className="font-sans text-overline uppercase tracking-mega-wide text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-heading-1 md:text-display text-charcoal mb-6 text-balance">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-body-lg text-charcoal-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: everyone deserves to wear jewelry that feels
                special — without the luxury markup. We craft demi-fine pieces using 18K gold plating
                over surgical-grade stainless steel, giving you the look and feel of fine jewelry at
                a fraction of the cost.
              </p>
              <p>
                Every piece is designed in our studio, hand-finished by skilled artisans, and tested
                for comfort and durability. We believe in fewer, better things — jewelry you reach
                for every morning without thinking twice.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 font-sans text-overline uppercase tracking-ultra-wide text-charcoal hover:text-gold-dark transition-colors duration-300 group"
            >
              Discover Our Pieces
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
