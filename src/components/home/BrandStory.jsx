import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-i1j2k3"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4 font-medium">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal mb-6 leading-snug">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p id="brand-story-desc" className="font-sans text-sm text-warm-gray leading-relaxed mb-6">
              Born from a love of fine craftsmanship and a belief that luxury should be accessible, Velmora creates demi-fine jewelry that bridges the gap between costume and fine. Each piece is thoughtfully designed, meticulously crafted with 18K gold plating, and made to be worn every day — from morning coffee to evening cocktails.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              We believe jewelry should tell a story. Whether it's a gift for someone you love or a treat for yourself, every Velmora piece is crafted to become a treasured part of your personal collection.
            </p>
            <span className="inline-block px-8 py-3 border border-gold text-gold text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold hover:text-cream transition-colors cursor-pointer">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
