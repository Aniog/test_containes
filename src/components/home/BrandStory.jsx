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
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
          {/* Image side */}
          <div className="relative overflow-hidden min-h-[360px] md:min-h-0">
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-velmora-cream/20" />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-5">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary leading-tight mb-6">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p id="brand-story-text" className="font-sans text-sm text-velmora-text-secondary leading-relaxed mb-4">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a luxury price tag. We design pieces that feel elevated, personal, and made to be worn every day.
            </p>
            <p className="font-sans text-sm text-velmora-text-secondary leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. From our studio to your jewelry box, with love.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-velmora-text-primary hover:text-velmora-gold transition-colors group"
            >
              Read Our Story
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
