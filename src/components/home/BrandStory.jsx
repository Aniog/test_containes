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
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry atelier craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-linen" />
          </div>

          {/* Text */}
          <div className="bg-linen flex flex-col justify-center px-8 md:px-14 py-14 md:py-20">
            <p className="font-manrope text-xs tracking-[0.15em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide leading-tight mb-6"
            >
              Jewelry That<br />
              <em className="not-italic font-normal">Tells Your Story</em>
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that live at the intersection of luxury and accessibility — crafted with care, worn with intention.
            </p>
            <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
              Every piece is 18K gold plated, hypoallergenic, and designed to be your everyday companion. From the first sketch to the final polish, quality is never compromised.
            </p>
            <Link
              to="/about"
              className="self-start font-manrope text-xs tracking-[0.12em] uppercase text-ink border-b border-linen hover:border-gold hover:text-gold transition-colors pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
