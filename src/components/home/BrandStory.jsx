import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-warm-black tracking-wide leading-tight"
            >
              Where Art Meets Adornment
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-brand-warm-gray font-sans leading-relaxed mb-4"
            >
              Born from a belief that luxury should be lived in, not locked away. Each piece in our collection is crafted with 18K gold plating over sterling silver — designed to move with you, age gracefully, and become part of your story.
            </p>
            <p className="text-sm md:text-base text-brand-warm-gray font-sans leading-relaxed mb-8">
              We work with artisan jewelers who share our obsession with detail. Every curve, every clasp, every finish is considered. Because you deserve jewelry that feels as extraordinary as it looks.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold text-xs tracking-ultra-wide uppercase font-sans font-medium px-10 py-3 hover:bg-brand-gold hover:text-white transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
