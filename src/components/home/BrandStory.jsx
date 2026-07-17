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
    <section id="story" className="bg-parchment py-20 md:py-28" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-k3l4m5"
              data-strk-img="[story-text] [story-heading] gold jewelry artisan craftsmanship"
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
            <p className="font-manrope text-xs uppercase tracking-[0.16em] text-gold mb-5">
              Our Story
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <p
              id="story-heading"
              className="font-manrope text-sm text-ash leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p
              id="story-text"
              className="font-manrope text-sm text-ash leading-relaxed mb-8"
            >
              Each piece is crafted with 18K gold plating over sterling silver or brass, using hypoallergenic materials that are gentle on sensitive skin. We believe in accessible luxury — jewelry that looks and feels expensive, without the price tag that keeps it in a box.
            </p>
            <Link
              to="/"
              className="self-start font-manrope text-xs uppercase tracking-[0.14em] text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
