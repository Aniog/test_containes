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
    <section id="story" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="story-img-main-c4d5e6"
                data-strk-img="[story-body] [story-headline]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: 'rgb(201,169,110)' }}>Our Story</p>
            <h2
              id="story-headline"
              className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6"
              style={{ color: 'rgb(44,36,32)' }}
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px mb-8" style={{ backgroundColor: 'rgb(201,169,110)' }} />
            <p
              id="story-body"
              className="font-sans text-sm leading-relaxed mb-4"
              style={{ color: 'rgb(92,74,58)' }}
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that move with you — from morning coffee to candlelit dinners — without ever asking you to choose between quality and accessibility.
            </p>
            <p className="font-sans text-sm leading-relaxed mb-10" style={{ color: 'rgb(92,74,58)' }}>
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest font-semibold transition-colors group"
              style={{ color: 'rgb(44,36,32)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgb(201,169,110)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgb(44,36,32)'}
            >
              Read Our Story
              <span className="w-8 h-px transition-all duration-300" style={{ backgroundColor: 'rgb(44,36,32)' }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
