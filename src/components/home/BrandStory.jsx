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
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-p6q7r8"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
            <p className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-inter text-sm text-warmgray leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-inter text-sm text-warmgray leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. We believe in accessible luxury — jewelry that feels like a treat, not a compromise.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/#"
                className="font-inter text-xs font-medium tracking-[0.15em] uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
              >
                Read Our Story
              </Link>
              <div className="h-px flex-1 bg-linen" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-linen">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-cormorant text-3xl font-light text-charcoal">{value}</p>
                  <p className="font-inter text-xs text-warmgray mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
