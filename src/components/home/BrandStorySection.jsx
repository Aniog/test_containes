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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p
              className="text-xs tracking-widest uppercase text-gold mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Made with intention,<br />
              <em>worn with love</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="text-sm text-taupe leading-relaxed mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed, ethically sourced, and finished in warm 18K gold plating.
            </p>
            <p
              className="text-sm text-taupe leading-relaxed mb-10"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              We create for the woman who collects moments — who marks milestones, celebrates herself, and gifts with intention. Jewelry that becomes part of her story.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-charcoal font-medium hover:text-gold transition-colors self-start"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Read Our Story
              <div className="w-8 h-px bg-charcoal" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
