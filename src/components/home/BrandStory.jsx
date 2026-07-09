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
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-ivory/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl font-light text-espresso leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="not-italic text-stone">Worn with love.</em>
            </h2>
            <p
              id="brand-story-desc"
              className="font-sans text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are made to be worn every day — to the office, to dinner, to wherever life takes you.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-8">
              Each piece is crafted from 18K gold-plated brass, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels precious without the precious price tag.
            </p>
            <Link
              to="/#about"
              className="self-start font-sans text-xs uppercase tracking-[0.15em] text-espresso border-b border-espresso/40 pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
