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
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden bg-linen">
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6"
            >
              Beauty in the<br />
              <em className="italic">Everyday</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-manrope text-sm text-stone leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and made to be worn every single day. Because you deserve to feel beautiful, always.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="font-manrope text-xs uppercase tracking-widest text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Our Story
              </Link>
              <div className="h-px flex-1 bg-linen" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-linen">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-cormorant text-2xl text-obsidian">{stat.value}</p>
                  <p className="font-manrope text-[10px] uppercase tracking-widest text-mist mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
