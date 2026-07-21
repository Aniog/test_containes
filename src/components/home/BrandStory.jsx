import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-m8q2"
              data-strk-img="[brand-story-title] [brand-story-text] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs font-medium uppercase tracking-widest text-gold">Our Story</span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-stone-900 font-light mt-4 leading-snug"
            >
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-stone-600 leading-relaxed"
            >
              Born from a love of understated luxury, Velmora creates demi-fine jewelry that bridges the gap between costume and fine. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over premium metals, and finished with the kind of detail usually reserved for high jewelry.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              We believe beautiful jewelry shouldn't require a special occasion. It should be part of your everyday — a quiet confidence you carry with you.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-gold hover:text-gold-dark transition-colors underline underline-offset-4"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
