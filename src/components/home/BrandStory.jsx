import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function BrandStory() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-velmora-warm-white fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div ref={containerRef} className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main-image"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry artisan craftsmanship gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-velmora-gold/20 -z-10" />
          </div>

          {/* Text content */}
          <div className="lg:pl-8">
            <p className="font-sans text-caption uppercase tracking-mega-wide text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-heading-1 md:text-display text-velmora-charcoal mb-6"
            >
              Where Craft Meets Heart
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-body-lg text-velmora-muted leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels 
              as special as she is. We create demi-fine pieces that bridge the gap between 
              costume jewelry and fine jewelry — offering the look and feel of luxury 
              without the prohibitive price tag.
            </p>
            <p className="font-sans text-body-lg text-velmora-muted leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over sterling silver, designed 
              to be hypoallergenic and built to last. Because jewelry shouldn't just 
              accessorize your outfit — it should tell your story.
            </p>
            <Link
              to="/about"
              className="btn-outline"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
