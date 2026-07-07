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
    <section id="about" className="py-20 md:py-28 bg-velmora-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-charcoal">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative gold border */}
            <div className="absolute inset-4 border border-velmora-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">enduring beauty</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold/50 mb-8" />
            <p
              id="brand-story-text"
              className="font-inter text-sm text-velmora-mist leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that live at the intersection of artistry and accessibility — crafted to be worn every day, and treasured for a lifetime.
            </p>
            <p className="font-inter text-sm text-velmora-mist leading-relaxed mb-10">
              Every piece is thoughtfully designed in our studio and crafted from 18K gold plated materials that are hypoallergenic, tarnish-resistant, and built to last. Because you deserve jewelry that keeps up with your life.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.15em] uppercase text-velmora-text hover:text-velmora-gold transition-colors duration-300 group"
            >
              <span>Read Our Story</span>
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
