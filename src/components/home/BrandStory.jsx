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
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted font-sans text-base leading-relaxed">
              Every Velmora piece begins with a sketch and a story. We believe jewelry should be more than decoration — it should be a quiet companion to your most meaningful moments. Our artisans hand-finish each piece with care, using ethically sourced materials and 18K gold plating that lasts.
            </p>
            <p className="mt-4 text-muted font-sans text-base leading-relaxed">
              Founded on the belief that luxury should be accessible, we create demi-fine jewelry that bridges the gap between costume and fine — without compromise.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-sans tracking-wide uppercase text-charcoal no-underline border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors duration-300 self-start"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
