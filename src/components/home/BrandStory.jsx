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
    <section ref={containerRef} className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="gold jewelry artisan crafting workshop warm lighting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan at work"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/30 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p 
              className="text-xs uppercase tracking-widest text-charcoal/50 mb-3"
              style={{ letterSpacing: '0.3em' }}
            >
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
              Jewelry That<br />Tells Your Story
            </h2>
            <div className="w-12 h-px bg-gold-500 mb-6" />
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her 
              feel extraordinary without compromise. We create demi-fine pieces that bridge the 
              gap between costume and fine jewelry.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over premium base metals, designed 
              to last through countless wearings. We work directly with skilled artisans to 
              bring you accessible luxury — no middlemen, no markups, just beautiful jewelry 
              at honest prices.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
