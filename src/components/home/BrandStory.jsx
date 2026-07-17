import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      {/* Image */}
      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
        <img
          data-strk-img-id="brand-story-img"
          data-strk-img="jewelry artisan crafting gold jewelry hands warm lighting"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora craftsmanship"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex items-center bg-cream-dark px-8 md:px-16 lg:px-20 py-16 md:py-0">
        <div className="max-w-md">
          <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-snug mb-6">
            Jewelry That Tells <br />Your Story
          </h2>
          <div className="w-12 h-px bg-gold mb-6" />
          <p className="font-sans text-sm text-taupe leading-relaxed mb-3">
            Velmora was born from a simple belief: that fine jewelry should feel as good as it looks. Every piece in our collection is crafted with 18K gold plating, ethically sourced materials, and an obsession for the details.
          </p>
          <p className="font-sans text-sm text-taupe leading-relaxed mb-8">
            Designed in Paris. Crafted by artisans. Worn by you — for every beautiful moment ahead.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-gold hover:text-gold-dark transition-colors font-medium"
          >
            Read Our Story
            <span className="w-8 h-px bg-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
