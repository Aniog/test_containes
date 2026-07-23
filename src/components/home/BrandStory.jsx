import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-cream-dark overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-heading] [brand-story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl mb-6">
              Our Story
            </h2>
            <p id="brand-story-text" className="text-text-secondary font-sans leading-relaxed mb-6">
              Velmora was born from a simple belief: luxury should feel personal, not
              inaccessible. Every piece in our collection is crafted in 18K gold-plated
              materials, designed to be worn daily, layered freely, and loved forever.
            </p>
            <p className="text-text-secondary font-sans leading-relaxed mb-8">
              We work directly with artisan jewelers who share our commitment to quality
              and ethical craftsmanship — no middlemen, no markups. Just beautiful jewelry
              at its honest price.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold font-sans hover:text-gold-hover transition-colors duration-300"
            >
              Read Our Story
              <span className="text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
