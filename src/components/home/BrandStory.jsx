import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function BrandStory() {
  const containerRef = useRef(null);
  const [revealRef, revealed] = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-warm">
      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d7e8f9"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-brand-muted font-sans leading-relaxed mb-4"
            >
              Born from a belief that fine jewelry should be accessible, Velmora
              crafts each piece with the same care and attention as the world's
              top maisons — at a price that lets you build a collection, not just
              a wish list.
            </p>
            <p className="text-sm md:text-base text-brand-muted font-sans leading-relaxed mb-8">
              Every design begins with a sketch, is refined through
              craftsmanship, and finished with 18K gold plating over
              hypoallergenic stainless steel — because beauty should never
              compromise comfort.
            </p>
            <Link
              to="/about"
              className="inline-block border border-brand-gold text-brand-gold px-8 py-3 text-xs font-sans font-semibold tracking-ultra-wide uppercase hover:bg-brand-gold hover:text-white transition-all duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
