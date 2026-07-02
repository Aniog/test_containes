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
      className="bg-cream py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-a1b2c3"
                data-strk-img="[brand-story-text] [brand-story-headline] gold jewelry atelier craftsmanship"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora atelier"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10 hidden md:block" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-headline"
              className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-10 h-px bg-gold my-6" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-mist leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that bridge the gap between costume and fine jewelry — crafted with care, priced with honesty.
            </p>
            <p className="font-manrope text-sm text-mist leading-relaxed mt-4">
              Every piece is 18K gold plated over sterling silver or brass, hypoallergenic, and designed to be worn every single day. From the studio to your jewelry box, we put quality first.
            </p>
            <Link
              to="/#about"
              className="mt-8 inline-flex items-center gap-3 font-manrope text-xs tracking-widest uppercase text-obsidian hover:text-gold transition-colors self-start"
            >
              Read Our Story
              <span className="w-8 h-px bg-current inline-block" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
