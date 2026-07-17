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
    <section ref={revealRef} className={`py-20 md:py-28 bg-brand-warm reveal-hidden ${revealed ? 'reveal-visible' : ''}`}>
      <div ref={containerRef} className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k3m4"
              data-strk-img="[brand-story-subtitle] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-[0.15em] uppercase text-brand-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-display-sm md:text-display text-brand-charcoal tracking-wide"
            >
              Where Craft Meets Intention
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-6 font-sans text-sm text-brand-muted leading-relaxed max-w-md"
            >
              Every Velmora piece begins with a sketch and ends with a story. We design demi-fine jewelry
              that bridges the gap between everyday wear and heirloom quality — 18K gold plated,
              hypoallergenic, and crafted to be treasured for years to come.
            </p>
            <p className="mt-4 font-sans text-sm text-brand-muted leading-relaxed max-w-md">
              Our artisans bring decades of expertise to each piece, ensuring that every detail — from
              the clasp to the finish — meets the standard we set for ourselves, and the one you deserve.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 btn-outline text-xs"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
