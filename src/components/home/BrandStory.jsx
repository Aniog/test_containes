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
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velmora-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-text-dark leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-6" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-8">
              Every piece is crafted from 18K gold-plated brass, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels like an heirloom, priced for real life.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-velmora-text-dark hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-stone/40 pb-0.5 self-start"
            >
              Read Our Story
              <span className="text-velmora-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
