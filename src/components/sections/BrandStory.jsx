import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 px-5 md:px-8 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry artisan hands gold workshop warm lighting"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-[500px]">
            <p className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-heading-1 md:text-heading-1 text-velmora-black mb-6"
            >
              Jewelry That Feels Like You
            </h2>
            <p
              id="brand-story-text"
              className="text-body-lg text-velmora-espresso leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: luxury should be felt, not flaunted.
              Every piece in our collection is designed for the woman who knows her worth —
              who chooses quality over quantity, and meaning over trends.
            </p>
            <p className="text-body text-velmora-warm-gray leading-relaxed mb-8">
              Our artisans handcraft each design using 18K gold plating over surgical-grade
              steel, ensuring every piece is as enduring as it is beautiful. From our studio
              to your jewelry box, we obsess over the details so you can simply wear and love.
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 border border-velmora-gold text-velmora-gold text-body-sm font-medium tracking-[0.1em] uppercase rounded-pill hover:bg-velmora-gold hover:text-white transition-all duration-300"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
