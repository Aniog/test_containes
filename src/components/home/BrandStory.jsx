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
    <section ref={containerRef} className="bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-desc] [brand-story-title] gold jewelry artisan crafted"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/30" />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
            <div className="max-w-md">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 font-medium">Our Story</p>
              <h2 id="brand-story-title" className="font-serif text-4xl lg:text-5xl text-parchment font-light leading-tight mb-6">
                Made with intention,<br />
                <em className="italic">worn with love</em>
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p id="brand-story-desc" className="text-sm text-parchment/70 leading-relaxed mb-5">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, last for years, and work for every moment of your life.
              </p>
              <p className="text-sm text-parchment/70 leading-relaxed mb-10">
                Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily without worry. Because you deserve to feel adorned, always.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-[10px] tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300 group"
              >
                Read Our Story
                <span className="w-8 h-px bg-gold group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
