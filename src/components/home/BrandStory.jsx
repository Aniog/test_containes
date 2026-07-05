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
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan crafted"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight mb-6"
            >
              Made with intention,<br />
              <em className="not-italic text-gold">worn with love</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-mist leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are crafted to be worn every day — through morning coffee, afternoon meetings, and evening dinners.
            </p>
            <p className="font-manrope text-sm text-mist leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio and crafted using 18K gold plating over sterling silver, ensuring lasting quality at an accessible price point. Hypoallergenic, tarnish-resistant, and made to be treasured.
            </p>
            <Link
              to="/about"
              className="self-start font-manrope text-xs uppercase tracking-[0.15em] text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
