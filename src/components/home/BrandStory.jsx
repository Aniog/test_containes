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
    <section ref={containerRef} className="bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c7d8e9"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-4">Our Story</p>
              <h2
                id="brand-story-heading"
                className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight mb-6"
              >
                Made with intention.<br />
                <em className="not-italic font-light text-muted">Worn with love.</em>
              </h2>
              <div className="w-12 h-px bg-gold mb-6" />
              <p
                id="brand-story-text"
                className="font-sans text-sm text-muted leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel genuinely luxurious, crafted with 18K gold plating and hypoallergenic materials that last.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                Every piece is designed in-house, thoughtfully made, and shipped to you in our signature packaging — because the unboxing is part of the experience.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest-md font-medium text-ink hover:text-gold transition-colors group"
              >
                Our Story
                <span className="w-8 h-px bg-ink group-hover:bg-gold transition-colors group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
