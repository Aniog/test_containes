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
    <section id="about" ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
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
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-gold mb-4 font-sans">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="text-sm text-ink-muted leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious, wear beautifully every day, and are priced so you can actually own them.
            </p>
            <p className="text-sm text-ink-muted leading-relaxed mb-8">
              Every piece is crafted from 18K gold-plated brass, hypoallergenic and designed to last. We work with small ateliers who share our commitment to quality and ethical production.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-ink hover:text-gold transition-colors duration-200 group"
            >
              Read Our Story
              <span className="w-8 h-px bg-ink group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
