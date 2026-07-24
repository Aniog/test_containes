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
    <section id="story" ref={containerRef} className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="story-img-main-b1c2d3"
                data-strk-img="[story-text] [story-headline] fine jewelry artisan craftsmanship gold"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gold border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-velmora-gold/30 -z-10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-headline"
              className="font-serif text-4xl md:text-5xl font-light text-velmora-text tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p
              id="story-text"
              className="font-sans text-sm leading-relaxed text-velmora-text-muted mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious every day — crafted with care, priced with intention.
            </p>
            <p className="font-sans text-sm leading-relaxed text-velmora-text-muted mb-8">
              Each piece is finished in 18K gold plating over hypoallergenic brass, designed to be worn from morning coffee to evening candlelight. Because you deserve to feel adorned, always.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs font-medium tracking-[0.2em] uppercase text-velmora-gold hover:gap-5 transition-all duration-300"
            >
              Read Our Story
              <div className="w-8 h-px bg-velmora-gold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
