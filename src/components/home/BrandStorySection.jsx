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
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight mb-8"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="space-y-4">
              <p
                id="brand-story-text"
                className="font-manrope text-sm text-ink-muted leading-relaxed"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move seamlessly from morning coffee to evening candlelight.
              </p>
              <p className="font-manrope text-sm text-ink-muted leading-relaxed">
                Every piece is crafted from 18K gold-plated brass and sterling silver, set with hand-selected stones. Hypoallergenic, nickel-free, and made to be worn every day.
              </p>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-linen">
              <div>
                <p className="font-cormorant text-3xl font-light text-ink">18K</p>
                <p className="font-manrope text-[10px] uppercase tracking-[0.12em] text-ink-faint mt-1">Gold Plated</p>
              </div>
              <div className="w-px h-10 bg-linen" />
              <div>
                <p className="font-cormorant text-3xl font-light text-ink">100%</p>
                <p className="font-manrope text-[10px] uppercase tracking-[0.12em] text-ink-faint mt-1">Hypoallergenic</p>
              </div>
              <div className="w-px h-10 bg-linen" />
              <div>
                <p className="font-cormorant text-3xl font-light text-ink">30</p>
                <p className="font-manrope text-[10px] uppercase tracking-[0.12em] text-ink-faint mt-1">Day Returns</p>
              </div>
            </div>

            <Link
              to="/#about"
              className="inline-flex items-center gap-3 mt-10 font-manrope text-xs uppercase tracking-[0.14em] text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
              <div className="w-6 h-px bg-current" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
