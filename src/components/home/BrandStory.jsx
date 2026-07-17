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
    <section id="story" ref={containerRef} className="bg-velmora-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              data-strk-img-id="story-img-velmora-b1c2d3"
              data-strk-img="[story-text] [story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
            <p className="text-[10px] uppercase tracking-[0.25em] text-velmora-gold mb-6 font-medium">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide leading-snug mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet elegance</em>
            </h2>
            <p
              id="story-text"
              className="text-sm text-velmora-slate leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="text-sm text-velmora-slate leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be worn every single day. Because you deserve to feel adorned, always.
            </p>
            <Link
              to="/"
              className="self-start text-xs uppercase tracking-widest text-velmora-obsidian font-medium border-b border-velmora-obsidian hover:text-velmora-gold hover:border-velmora-gold transition-colors pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
