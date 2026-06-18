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
    <section id="story" ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              data-strk-img-id="story-img-main-b1c2d3"
              data-strk-img="[story-text] [story-headline] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-headline"
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-obsidian leading-tight"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p
              id="story-text"
              className="font-manrope text-sm text-stone leading-relaxed"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that move with you — from morning routines to evening rituals, from everyday moments to the ones you'll remember forever.
            </p>
            <p className="font-manrope text-sm text-stone leading-relaxed mt-4">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily without worry. Because the best jewelry is the kind you never take off.
            </p>
            <Link
              to="/"
              className="mt-8 self-start font-manrope text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
