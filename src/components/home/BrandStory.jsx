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
    <section ref={containerRef} className="bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-gold mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-ink-muted leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune,
              but it should feel like it does. Every piece is thoughtfully designed to be worn every day —
              from morning coffee to candlelit dinners.
            </p>
            <p className="font-manrope text-sm text-ink-muted leading-relaxed mt-4">
              We work with skilled artisans to create demi-fine pieces in 18K gold plate over
              hypoallergenic bases. Accessible luxury, without compromise.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 font-manrope text-xs tracking-widest uppercase text-obsidian border-b border-obsidian pb-0.5 w-fit hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
