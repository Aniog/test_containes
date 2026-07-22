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
    <section ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs tracking-[0.18em] uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide leading-tight mb-6"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <p
              id="brand-story-body"
              className="font-manrope text-sm text-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury price tag. We design each piece to be worn every day — to the office, on a date, or gifted to someone you love.
            </p>
            <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
              Every piece is 18K gold plated over sterling silver or brass, hypoallergenic, and crafted to last. We believe in slow, intentional design — fewer pieces, made better.
            </p>
            <Link
              to="/about"
              className="self-start font-manrope text-xs tracking-[0.15em] uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
