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
    <section ref={containerRef} className="section-padding bg-linen">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-p7q8r9"
              data-strk-img="[brand-story-title] [brand-story-text] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-ink">
              The Art of Quiet Luxury
            </h2>
            <p id="brand-story-text" className="mt-6 text-stone leading-relaxed">
              Every Velmora piece begins with a sketch and a story. We believe jewelry should feel personal — 
              not mass-produced. Our artisans hand-finish each design using 18K gold plating over hypoallergenic 
              bases, creating pieces that look and feel like fine jewelry at a fraction of the price.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              From our studio to your jewelry box, every detail is considered. Because you deserve pieces 
              that are crafted to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-gold text-gold text-sm uppercase tracking-button font-medium pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
