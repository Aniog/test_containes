import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
          <img
            alt="Velmora craftsmanship"
            data-strk-img-id="story-img-1a2b3c"
            data-strk-img="[story-title] [story-text]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-0">
          <div className="max-w-md">
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl tracking-[0.06em] text-espresso leading-tight"
            >
              Jewelry That Tells
              <br />
              Your Story
            </h2>
            <p
              id="story-text"
              className="mt-6 text-sm text-taupe leading-relaxed"
            >
              Velmora was born from a simple belief: that every woman deserves jewelry
              that makes her feel extraordinary — without the extraordinary price tag.
              Each piece is crafted in small batches using 18K gold plating and ethically
              sourced materials, designed to become part of your daily ritual.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-dark transition-colors border-b border-gold pb-1"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}