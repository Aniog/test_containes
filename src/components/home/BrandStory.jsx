import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-parchment py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden mb-10 md:mb-0">
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-velmora-gold pointer-events-none hidden md:block" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs uppercase tracking-widest-lg text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 id="brand-story-heading" className="font-cormorant text-4xl md:text-5xl text-velmora-ink font-light leading-[1.15] mb-6">
              Born from a love of<br />
              <em className="italic">enduring beauty</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p id="brand-story-text" className="font-inter text-sm text-velmora-stone leading-relaxed mb-4">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces in 18K gold plating that are made to be worn every day — to the office, to brunch, to wherever life takes you.
            </p>
            <p className="font-inter text-sm text-velmora-stone leading-relaxed mb-10">
              Every piece is thoughtfully designed, hypoallergenic, and crafted to last. Because you deserve jewelry that keeps up with you.
            </p>
            <Link
              to="/about"
              className="self-start font-inter text-xs uppercase tracking-widest-md text-velmora-ink border-b border-velmora-ink pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
