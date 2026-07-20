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
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <span id="brand-story-title" className="sr-only">Velmora brand story artisan jewelry making</span>
            <span id="brand-story-desc" className="sr-only">close up of hands crafting fine gold jewelry artisan workshop warm light</span>
            <img
              data-strk-img-id="brand-story-img-k2l3m4"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-5">
              Our Story
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight mb-6">
              Born from a love of
              <br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-inter text-sm text-mist leading-relaxed mb-5">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-inter text-sm text-mist leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/#about"
              className="self-start font-inter text-xs tracking-widest uppercase text-ink border-b border-ink/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
