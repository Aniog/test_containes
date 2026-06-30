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
    <section className="py-20 md:py-28 bg-warm-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-e5"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-stone-800"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm text-stone-600 leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts
              demi-fine pieces that bridge the gap between everyday wear and luxury.
              Each piece is designed in our studio and brought to life by skilled artisans
              using 18K gold plating over sterling silver.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed mb-8">
              We believe in jewelry that tells your story — pieces you reach for
              every morning, that become part of who you are. No compromise on quality,
              no markup for tradition.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold text-xs tracking-super-wide uppercase font-medium px-8 py-3 hover:bg-gold hover:text-white transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
