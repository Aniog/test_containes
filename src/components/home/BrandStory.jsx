import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              alt="Jewelry artisan craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id="brand-story-img-e0f1g2"
              data-strk-img="gold jewelry artisan workshop craftsmanship elegant warm"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Text content */}
          <div className="lg:pl-8">
            <p className="section-subheading mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal tracking-wide leading-tight mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-charcoal-500 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves to wear jewelry that makes her feel extraordinary, without the extraordinary price tag.
            </p>
            <p className="font-sans text-charcoal-500 leading-relaxed mb-4">
              Our pieces are crafted with meticulous attention to detail using 18K gold plating over sterling silver, designed to be worn and cherished every day. We work directly with skilled artisans to bring you demi-fine jewelry that bridges the gap between costume and couture.
            </p>
            <p className="font-sans text-charcoal-500 leading-relaxed mb-8">
              Each piece in our collection is hypoallergenic, nickel-free, and made to last — because we believe luxury should be accessible, sustainable, and deeply personal.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
