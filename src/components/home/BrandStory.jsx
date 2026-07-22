import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <span id="brand-story-title" className="hidden">Velmora Fine Jewelry brand story</span>
            <span id="brand-story-desc" className="hidden">artisan jewelry crafting gold demi-fine editorial</span>
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide leading-tight">
              Made with intention,
              <br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-8 mb-8" />
            <p className="font-inter text-sm text-stone leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design each piece to feel like an heirloom from the moment you put it on.
            </p>
            <p className="font-inter text-sm text-stone leading-relaxed mt-4">
              Every Velmora piece is crafted with 18K gold plating over hypoallergenic bases, designed to last through every chapter of your life. From morning routines to milestone moments.
            </p>
            <Link
              to="/about"
              className="mt-10 self-start font-inter text-xs uppercase tracking-[0.15em] text-charcoal border-b border-charcoal/40 hover:border-gold hover:text-gold transition-colors duration-200 pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
