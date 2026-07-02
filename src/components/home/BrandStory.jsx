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
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velmora-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl text-velmora-obsidian font-light leading-tight"
            >
              Made with<br />
              <em className="italic">intention</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm text-velmora-ash leading-relaxed mt-6 max-w-sm"
            >
              Velmora was born from a belief that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners — without ever losing their luster.
            </p>
            <p className="font-sans text-sm text-velmora-ash leading-relaxed mt-4 max-w-sm">
              Every piece is crafted from 18K gold-plated brass, hypoallergenic and tarnish-resistant. Because you deserve jewelry that lasts as long as the memories you make wearing it.
            </p>
            <Link
              to="/#about"
              className="mt-8 self-start font-sans text-xs tracking-widest uppercase text-velmora-obsidian border-b border-velmora-obsidian pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
