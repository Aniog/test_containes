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
    <section
      id="about"
      ref={containerRef}
      className="bg-warmwhite py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-parchment flex flex-col justify-center px-8 md:px-14 py-14 md:py-20">
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight tracking-wide"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-10 h-px bg-gold mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="font-inter text-sm text-charcoal leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design demi-fine pieces in 18K gold plating that are built to last — hypoallergenic, tarnish-resistant, and crafted with the same care as fine jewelry.
            </p>
            <p className="font-inter text-sm text-charcoal leading-relaxed mt-4">
              Every piece is designed in-house and made for real life — the kind of jewelry you reach for every morning without thinking twice.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-2 mt-8 font-inter text-[11px] uppercase tracking-[0.16em] text-gold hover:text-gold-light transition-colors group"
            >
              Read Our Story
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
