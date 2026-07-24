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
    <section ref={containerRef} className="bg-velmora-pearl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] lg:aspect-auto bg-velmora-sand overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-7d3e1b"
            data-strk-img="[brand-story-title] [brand-story-subtitle]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-lg">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl lg:text-4xl text-velmora-ink font-light tracking-wide leading-tight"
            >
              Designed for the<br />Modern Woman
            </h2>
            <div className="hairline w-16 mt-6 mb-6" />
            <p
              id="brand-story-subtitle"
              className="text-sm font-sans text-velmora-stone leading-relaxed"
            >
              At Velmora, we believe luxury should feel effortless. Every piece is designed in-house
              and crafted with 18K gold plating over brass, using ethically sourced materials.
              Our collections are made to be lived in — from morning coffee to evening cocktails,
              because the best jewelry isn't just worn, it's treasured.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs font-sans tracking-[0.15em] uppercase text-velmora-ink border-b border-velmora-gold pb-1 hover:text-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}