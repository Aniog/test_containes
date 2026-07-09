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
    <section className="py-20 md:py-28 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-text-primary"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-text-secondary leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine-quality jewelry should be
              accessible, not exclusive. Every piece in our collection is crafted with
              the same care and attention as traditional fine jewelry — 18K gold plating,
              hand-set stones, and hypoallergenic materials — at a price that lets you
              build a collection, not just own a single piece.
            </p>
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed mb-8">
              We design for the woman who values quality over quantity, who believes
              that the right piece of jewelry can transform not just an outfit, but
              how she feels. Quiet luxury. Intentional beauty. Made to be treasured.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold hover:bg-gold hover:text-white font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
