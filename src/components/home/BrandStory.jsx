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
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-5">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-espresso tracking-wide leading-tight mb-8"
            >
              Born from a love of<br />
              <em className="not-italic text-warm-brown">quiet beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-inter text-sm text-taupe leading-relaxed mb-6"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners — without ever losing their luster.
            </p>
            <p className="font-inter text-sm text-taupe leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily and treasured for years. We believe in accessible luxury — jewelry that feels like an heirloom, priced like a treat.
            </p>
            <Link
              to="/#"
              className="self-start font-inter text-[11px] uppercase tracking-[0.14em] text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
