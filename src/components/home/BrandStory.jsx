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
    <section id="story" className="py-20 md:py-28 bg-velmora-linen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-s1t2u3"
                data-strk-img="[story-desc] [story-headline] jewelry artisan craftsmanship gold warm light"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt="Velmora brand story"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-velmora-gold/30 hidden md:block" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-headline"
              className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide leading-snug"
            >
              Born from a love of<br />
              <em className="not-italic text-velmora-gold-muted">quiet elegance</em>
            </h2>
            <div className="w-8 h-px bg-velmora-gold mt-6 mb-6" />
            <p
              id="story-desc"
              className="font-manrope text-sm text-velmora-mist leading-relaxed"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last for years.
            </p>
            <p className="font-manrope text-sm text-velmora-mist leading-relaxed mt-4">
              Every piece is crafted from 18K gold-plated brass, set with AAA-grade stones, and finished by hand. We believe in slow design, thoughtful sourcing, and jewelry that becomes part of your story.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 font-manrope text-xs uppercase tracking-widest text-velmora-obsidian border-b border-velmora-gold pb-0.5 hover:text-velmora-gold transition-colors duration-200"
            >
              Read Our Full Story
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
