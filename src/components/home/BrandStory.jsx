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
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-gold/5" />
          </div>

          {/* Text */}
          <div className="bg-ivory flex flex-col justify-center px-8 md:px-14 py-14 md:py-20">
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-5">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide leading-[1.1] mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p
              id="brand-story-text"
              className="font-inter text-sm text-stone-warm leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are made to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p className="font-inter text-sm text-stone-warm leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. Because you deserve to feel beautiful, always.
            </p>
            <Link
              to="/about"
              className="self-start font-inter text-[11px] uppercase tracking-[0.14em] text-charcoal hover:text-gold transition-colors border-b border-charcoal/30 hover:border-gold pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
