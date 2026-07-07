import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import RevealSection from '@/components/RevealSection';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <RevealSection>
            <div className="aspect-[4/5] overflow-hidden img-placeholder">
              <img
                data-strk-img-id="brand-story-3k7m"
                data-strk-img="[brand-story-text] [brand-story-heading]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealSection>

          {/* Text */}
          <RevealSection delay={1}>
            <div className="py-4 md:py-8">
              <h2
                id="brand-story-heading"
                className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide"
              >
                The Art of Quiet Luxury
              </h2>
              <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
              <p
                id="brand-story-text"
                className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-4"
              >
                Born from a belief that fine jewelry should be accessible, Velmora
                crafts each piece with the same care and intention as the world's
                most coveted houses — at a price that invites you to collect, gift,
                and wear without hesitation.
              </p>
              <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-8">
                Every design begins with a sketch, evolves through meticulous
                prototyping, and is finished with 18K gold plating over
                hypoallergenic materials. The result: jewelry that looks and feels
                extraordinary, every single day.
              </p>
              <Link
                to="/about"
                className="font-sans text-xs tracking-extra-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors link-underline pb-1"
              >
                Our Story
              </Link>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
