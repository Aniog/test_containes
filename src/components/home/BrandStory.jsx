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
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan jewelry maker crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4 font-medium">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-ink-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are crafted to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p className="font-sans text-sm text-ink-muted leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio and crafted from 18K gold-plated brass with hypoallergenic components. We believe in accessible luxury — jewelry that looks and feels expensive, without the price tag that keeps it in a drawer.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-all duration-300 self-start"
            >
              Our Story
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
