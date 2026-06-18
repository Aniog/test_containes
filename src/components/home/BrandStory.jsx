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
      className="py-0 bg-linen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story craftsmanship</span>
            <span id="brand-story-desc" className="sr-only">artisan jewelry maker crafting gold demi-fine jewelry in studio</span>
            <img
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight mb-6">
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="h-px w-12 bg-gold mb-6" />
            <p className="font-manrope text-sm text-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over sterling silver or brass, using hypoallergenic materials that are gentle on sensitive skin. Because luxury should feel good in every sense.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-2 font-manrope text-xs tracking-[0.15em] uppercase text-ink hover:text-gold transition-colors border-b border-stone/50 hover:border-gold pb-0.5 self-start"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
