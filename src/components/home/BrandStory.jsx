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
    <section id="story" ref={containerRef} className="py-0 bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[story-text] [story-headline]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16 lg:py-20">
            <p className="text-xs font-sans tracking-widest uppercase text-gold mb-4 font-medium">
              Our Story
            </p>
            <h2 id="story-headline" className="font-display text-4xl lg:text-5xl font-light text-obsidian leading-tight mb-6">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <p id="story-text" className="font-sans text-base text-muted leading-relaxed mb-4">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed to be worn daily — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              We work with skilled artisans to create demi-fine pieces in 18K gold plating over hypoallergenic bases. Accessible luxury, without compromise.
            </p>
            <Link
              to="/"
              className="self-start text-xs font-sans tracking-widest uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-all duration-200"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
