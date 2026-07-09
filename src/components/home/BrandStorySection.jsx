import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-4c5d6e"
              data-strk-img="[brand-story-text] [brand-story-title] artisan jewelry crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative gold border */}
            <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-5">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl font-light text-obsidian tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-obsidian/70 leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-sm md:text-base text-obsidian/70 leading-relaxed mb-10">
              Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. We believe in accessible luxury — jewelry that feels premium without the premium price tag.
            </p>
            <Link
              to="/"
              className="self-start font-sans text-xs uppercase tracking-[0.15em] text-obsidian border-b border-obsidian/30 hover:border-gold hover:text-gold transition-all duration-300 pb-0.5"
            >
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
