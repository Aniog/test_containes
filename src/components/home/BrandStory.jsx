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
    <section
      id="story"
      ref={containerRef}
      className="bg-parchment py-20 md:py-28 border-t border-linen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              data-strk-img-id="story-img-main-v2w3x4"
              data-strk-img="[story-text] [story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative gold border */}
            <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p
              id="story-text"
              className="font-sans text-sm text-ink-muted leading-relaxed"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed in our studio, crafted from 18K gold-plated brass and hypoallergenic materials that are gentle on skin and kind to the planet.
            </p>
            <p className="font-sans text-sm text-ink-muted leading-relaxed mt-4">
              We believe in jewelry that tells your story — pieces you reach for every morning, that travel with you, that you pass down. Demi-fine, forever yours.
            </p>
            <Link
              to="/"
              className="mt-8 self-start font-sans text-xs tracking-widest uppercase text-ink border-b border-ink/30 hover:border-gold hover:text-gold transition-colors pb-0.5"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
