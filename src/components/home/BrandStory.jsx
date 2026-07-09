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
    <section id="story" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-c3d4e5"
              data-strk-img="[story-text] [story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-gold mb-6">
                Our Story
              </p>
              <h2
                id="story-heading"
                className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight mb-8"
              >
                Made with intention.<br />
                <em className="not-italic font-light text-muted">Worn with love.</em>
              </h2>
              <p
                id="story-text"
                className="font-sans text-sm font-light text-muted leading-relaxed mb-6"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
              </p>
              <p className="font-sans text-sm font-light text-muted leading-relaxed mb-10">
                Every piece is crafted with 18K gold plating over sterling silver, using hypoallergenic materials that are kind to sensitive skin. Because luxury should feel good in every sense.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-widest text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
