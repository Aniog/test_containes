import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-title] fine gold jewelry craftsmanship atelier"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-velmora-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs uppercase tracking-[0.25em] text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-dark tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet elegance</em>
            </h2>

            <div className="hairline mb-6 w-16" />

            <p
              id="brand-story-text"
              className="font-inter text-sm text-velmora-text-muted leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — from morning coffee to candlelit dinners.
            </p>
            <p className="font-inter text-sm text-velmora-text-muted leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to hold their beauty through the rhythms of real life. Because the best jewelry is the kind you never want to take off.
            </p>

            <Link
              to="/about"
              className="self-start font-inter text-xs uppercase tracking-widest text-velmora-text-dark border-b border-velmora-text-dark/30 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200 pb-0.5"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
