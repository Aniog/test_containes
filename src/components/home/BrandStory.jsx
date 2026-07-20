import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import AnimatedSection from '../ui/AnimatedSection';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 sm:py-24 bg-brand-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection animation="scroll-fade-in-left">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <img
                data-strk-img-id="brand-story-main"
                data-strk-img="[brand-story-title] jewelry artisan hands crafting gold"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Jewelry artisan crafting gold"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection animation="scroll-fade-in-right" className="lg:pl-8">
            <p className="text-gold-600 text-xs tracking-mega-wide uppercase font-medium mb-3">
              Our Story
            </p>
            <h2 id="brand-story-title" className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-950 font-light leading-tight">
              Jewelry That Feels Like{' '}
              <span className="italic text-gold-700">You</span>
            </h2>
            <div className="w-12 h-px bg-gold-400 mt-6 mb-6" />
            <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed mb-4">
              VELMORA was born from a simple belief: every woman deserves jewelry that feels
              luxurious without the luxury markup. We create demi-fine pieces using 18K
              gold-plated sterling silver — designed to be worn every day, gifted with love,
              and treasured for years.
            </p>
            <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed mb-8">
              Each piece is hypoallergenic, tarnish-resistant, and crafted with the same
              attention to detail you'd find at ten times the price. Because looking and
              feeling extraordinary shouldn't be a splurge — it should be a given.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs tracking-ultra-wide uppercase text-charcoal-900 font-semibold border-b-2 border-gold-500 pb-1 hover:text-gold-700 hover:border-gold-600 transition-colors"
            >
              Discover Our Collection
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
