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
    <section ref={containerRef} className="py-16 md:py-24 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f1g2h3"
              data-strk-img="[brand-story-text] [brand-story-heading] Velmora jewelry craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-stone-900"
            >
              The Art of Quiet Luxury
            </h2>
            <div className="w-12 h-px bg-accent mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-stone-600 leading-relaxed text-base font-light"
            >
              Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with
              the same care and intention as the world's top maisons. Our 18K gold plated designs are
              hypoallergenic, tarnish-resistant, and made to move with you — from morning coffee to
              evening celebrations.
            </p>
            <p className="text-stone-600 leading-relaxed text-base font-light mt-4">
              Every piece is designed in our studio and finished by hand, ensuring the kind of quality
              that becomes part of your story.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-accent text-accent text-xs uppercase tracking-nav font-medium px-10 py-3 hover:bg-accent hover:text-white transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
