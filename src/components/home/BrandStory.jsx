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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-s1t2u3"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan jewelry making gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none hidden md:block" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-obsidian-500 leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are made to be worn every day — to the office, to dinner, to wherever life takes you.
            </p>
            <p className="font-sans text-sm text-obsidian-500 leading-relaxed mb-10">
              Each piece is crafted from 18K gold-plated brass and sterling silver, hypoallergenic and built to last. We believe in quiet luxury — pieces that speak softly but say everything.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-widest uppercase text-obsidian border-b border-obsidian pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
              <span className="text-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
