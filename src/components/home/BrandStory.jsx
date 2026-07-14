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
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-inter text-xs uppercase tracking-widest text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <p
              id="brand-story-desc"
              className="font-inter text-sm text-velmora-mist leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-inter text-sm text-velmora-mist leading-relaxed mb-8">
              Every piece is crafted from 18K gold plated brass with hypoallergenic posts, designed to last through the everyday moments that matter most.
            </p>
            <div className="h-px bg-velmora-stone/20 mb-8" />
            <div className="flex items-center gap-10 mb-8">
              {[['2019', 'Founded'], ['50K+', 'Happy Customers'], ['100%', 'Hypoallergenic']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-cormorant text-3xl text-velmora-obsidian">{val}</p>
                  <p className="font-inter text-xs uppercase tracking-widest text-velmora-mist mt-1">{label}</p>
                </div>
              ))}
            </div>
            <Link
              to="/shop"
              className="self-start font-inter text-xs uppercase tracking-widest border border-velmora-obsidian text-velmora-obsidian px-8 py-3 hover:bg-velmora-obsidian hover:text-velmora-text-light transition-all duration-300"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
