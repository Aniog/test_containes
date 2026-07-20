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
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f0g1h2"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal mb-6 leading-tight"
            >
              A Legacy of Quiet Elegance
            </h2>
            <p
              id="brand-story-desc"
              className="text-sm md:text-base text-brand-muted leading-relaxed mb-6"
            >
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully designed, 
              meticulously crafted with 18K gold plating, and made to be worn every day — 
              from morning coffee to evening cocktails.
            </p>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed mb-8">
              We believe jewelry should tell your story. Not shout it — whisper it. 
              That's the Velmora way.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-xs font-medium tracking-widest uppercase text-brand-charcoal border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors no-underline self-start"
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
