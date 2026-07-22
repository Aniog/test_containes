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
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
            <img
              data-strk-img-id="brand-story-img-9e2f7a"
              data-strk-img="jewelry artisan crafting gold necklace warm studio editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.25'/%3E"
              alt="Velmora artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-widest font-sans text-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-light leading-[1.15] mb-6">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-sm text-charcoal-light leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel 
              extraordinary without the extraordinary price tag. We design pieces that bridge the gap 
              between costume and fine jewelry — demi-fine pieces crafted with 18K gold plating, 
              genuine materials, and meticulous attention to detail.
            </p>
            <p className="text-sm text-charcoal-light leading-relaxed mb-8">
              Each piece is designed to be layered, stacked, and styled your way. Because jewelry 
              isn't just an accessory — it's a form of self-expression.
            </p>
            <Link to="/shop" className="text-link">
              Discover the Collection →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
