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
      className="py-20 md:py-0 bg-ivory-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-b1c2d3"
            data-strk-img="[brand-story-body] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gold/10" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-16 md:py-20">
          <p className="text-xs font-sans uppercase tracking-widest text-gold mb-4">Our Story</p>
          <h2
            id="brand-story-title"
            className="font-serif text-3xl md:text-4xl font-light text-obsidian leading-snug"
          >
            Born from a love of
            <br />
            <em className="italic">quiet elegance</em>
          </h2>
          <p
            id="brand-story-body"
            className="mt-6 text-sm font-sans text-taupe leading-relaxed"
          >
            Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners — without ever losing their luster.
          </p>
          <p className="mt-4 text-sm font-sans text-taupe leading-relaxed">
            Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. We believe in accessible luxury — jewelry that feels like an heirloom from the very first wear.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="font-serif text-3xl font-light text-gold">18K</p>
              <p className="text-[10px] font-sans uppercase tracking-widest text-taupe mt-1">Gold Plated</p>
            </div>
            <div className="w-px h-10 bg-ivory-dark" />
            <div>
              <p className="font-serif text-3xl font-light text-gold">100%</p>
              <p className="text-[10px] font-sans uppercase tracking-widest text-taupe mt-1">Hypoallergenic</p>
            </div>
            <div className="w-px h-10 bg-ivory-dark" />
            <div>
              <p className="font-serif text-3xl font-light text-gold">5K+</p>
              <p className="text-[10px] font-sans uppercase tracking-widest text-taupe mt-1">Happy Customers</p>
            </div>
          </div>

          <Link
            to="/shop"
            className="mt-10 self-start border border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300 inline-block"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
