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
    <section id="story" ref={containerRef} className="bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="story-img-velmora-c7d8e9"
              data-strk-img="[story-text] [story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-button uppercase text-gold mb-4">Our Story</p>
            <h2
              id="story-heading"
              className="font-serif text-3xl md:text-4xl text-obsidian font-light leading-snug mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p
              id="story-text"
              className="font-sans text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. Because you deserve to feel adorned, every single day.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-button uppercase text-obsidian border-b border-obsidian/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200 self-start"
            >
              Read Our Story
              <span className="text-base leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
