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
    <section id="about" ref={containerRef} className="bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-gold/10" />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <div className="max-w-md">
              <p className="font-manrope text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-heading"
                className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian leading-tight mb-6"
              >
                Made with intention,
                <br />
                <em className="italic">worn with love</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-6" />
              <p
                id="brand-story-body"
                className="font-manrope text-sm text-ink-muted leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry
                shouldn't be reserved for special occasions. We design demi-fine
                pieces that move with you — from morning coffee to candlelit dinners.
              </p>
              <p className="font-manrope text-sm text-ink-muted leading-relaxed mb-8">
                Every piece is crafted with 18K gold plating over sterling silver,
                hypoallergenic and built to last. Because you deserve jewelry that
                keeps up with your life.
              </p>
              <Link
                to="/#about"
                className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
