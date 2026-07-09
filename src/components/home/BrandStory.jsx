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
    <section ref={containerRef} id="story" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
            <img
              data-strk-img-id="story-img-velmora-b1c2d3"
              data-strk-img="[story-text] [story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-gold/30 pointer-events-none hidden md:block" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-manrope text-xs font-medium tracking-[0.2em] uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p
              id="story-text"
              className="font-manrope text-sm text-mist leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-manrope text-sm text-mist leading-relaxed mb-10">
              Every piece is crafted in 18K gold-plated brass, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels precious without the precious price tag.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-manrope text-xs font-semibold tracking-[0.15em] uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
