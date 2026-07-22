import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-desc] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">Our Story</p>
              <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-tight mb-6">
                Made with intention.<br />
                <em>Worn with love.</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-8" />
              <p id="brand-story-desc" className="font-sans text-sm text-muted-warm leading-relaxed mb-4">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
              </p>
              <p className="font-sans text-sm text-muted-warm leading-relaxed mb-8">
                Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. Because you deserve jewelry that keeps up with your life.
              </p>
              <Link
                to="/#story"
                className="font-sans text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-200 border-b border-charcoal hover:border-gold pb-1"
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
