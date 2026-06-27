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
    <section ref={containerRef} className="bg-[var(--color-surface-dark)] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto bg-[var(--color-velmora-900)] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-m3n4o5"
            data-strk-img="[brand-story-subtitle] [brand-story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 md:px-16 py-16 md:py-24">
          <div className="max-w-md">
            <span className="text-xs tracking-[0.3em] uppercase text-white/40">Our Philosophy</span>
            <h2 id="brand-story-title" className="font-[var(--font-serif)] text-3xl md:text-4xl mt-4 font-semibold leading-tight">
              Jewelry Is Meant<br />to Be Lived In
            </h2>
            <div className="w-12 h-px bg-[var(--color-accent)] mt-6 mb-6" />
            <p id="brand-story-subtitle" className="text-white/50 leading-relaxed mb-8">
              At Velmora, we believe fine jewelry shouldn't sit in a box waiting for a special occasion. Our pieces are crafted from 18K gold plate — designed to elevate your everyday with warm, sculptural beauty that lasts. Ethically sourced materials, hypoallergenic metals, and a commitment to timeless design guide everything we make.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wider uppercase font-medium text-white hover:text-[var(--color-accent-light)] transition-colors group"
            >
              Our Story
              <span className="inline-block w-8 h-px bg-white/40 group-hover:bg-[var(--color-accent-light)] group-hover:w-12 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
