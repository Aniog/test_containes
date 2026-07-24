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
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-velmora-gold/30 pointer-events-none hidden md:block" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-obsidian tracking-wide leading-[1.2] mb-6"
            >
              Born from a love of
              <br />
              <em className="italic">lasting beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="text-sm text-velmora-muted leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design every piece to be worn daily — through coffee runs, boardrooms, and candlelit dinners.
            </p>
            <p className="text-sm text-velmora-muted leading-relaxed mb-8">
              Each piece is crafted in 18K gold plate over sterling silver or brass, set with hand-selected stones, and finished to a standard that rivals fine jewelry at a fraction of the price. Because you deserve to feel extraordinary every day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 py-8 border-t border-b border-velmora-border">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-2xl font-light text-velmora-obsidian">{value}</p>
                  <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-velmora-muted mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/shop"
              className="self-start border border-velmora-obsidian text-velmora-obsidian px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-velmora-obsidian hover:text-velmora-ivory transition-all duration-200"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
