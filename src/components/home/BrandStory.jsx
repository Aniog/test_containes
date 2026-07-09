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
      id="story"
      ref={containerRef}
      className="bg-cream py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <span id="story-img-title" className="sr-only">Velmora jewelry brand story artisan craftsmanship</span>
            <span id="story-img-desc" className="sr-only">woman wearing gold jewelry close up editorial portrait warm light</span>
            <img
              data-strk-img-id="story-img-main-b1c2d3"
              data-strk-img="[story-img-desc] [story-img-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink leading-[1.15]">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p className="font-sans text-sm text-mist leading-relaxed">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious every day — crafted with intention, worn with ease.
            </p>
            <p className="font-sans text-sm text-mist leading-relaxed mt-4">
              Each piece is thoughtfully designed in our studio and crafted using 18K gold plating over hypoallergenic bases. We believe in accessible luxury — jewelry that looks and feels expensive, without the guilt.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-gold mt-8 hover:gap-3 transition-all duration-300 self-start border-b border-gold/40 pb-0.5"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
