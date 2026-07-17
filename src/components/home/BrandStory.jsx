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
    <section ref={containerRef} id="story" className="bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-d4e5f6"
              data-strk-img="[story-text] [story-heading] jewelry artisan crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="not-italic text-gold-dark">quiet beauty</em>
            </h2>
            <p
              id="story-text"
              className="font-manrope text-sm text-muted leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — to the office, to dinner, to wherever life takes you.
            </p>
            <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. We believe in accessible luxury — jewelry that feels like an heirloom without the heirloom price.
            </p>
            <Link
              to="/"
              className="self-start font-manrope text-xs font-semibold tracking-[0.15em] uppercase text-ink border-b border-ink/30 hover:border-gold hover:text-gold pb-0.5 transition-colors duration-200"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
