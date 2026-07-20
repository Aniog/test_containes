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
    <section ref={containerRef} className="bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story</span>
            <span id="brand-story-desc" className="sr-only">jewelry atelier craftsmanship gold demi-fine artisan woman</span>
            <img
              data-strk-img-id="brand-story-img-bs1a2b"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso tracking-wide leading-tight mb-6">
              Made with intention.<br />
              <em>Worn with love.</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-sans text-base text-stone leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-base text-stone leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over sterling silver, hypoallergenic and built to last. Because you deserve jewelry that keeps up with your life.
            </p>
            <Link
              to="/about"
              className="self-start font-sans text-xs uppercase tracking-[0.15em] text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
