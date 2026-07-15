import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan jewelry making gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
            <div className="max-w-md">
              <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-heading"
                className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian leading-tight mb-6"
              >
                Made with intention,<br />
                <em className="italic">worn with love</em>
              </h2>
              <div className="w-10 h-px bg-velmora-gold mb-6" />
              <p
                id="brand-story-text"
                className="font-manrope text-sm text-velmora-text-muted leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that bridge the gap between costume and fine jewelry — crafted with care, priced with honesty.
              </p>
              <p className="font-manrope text-sm text-velmora-text-muted leading-relaxed mb-8">
                Every piece is 18K gold plated over hypoallergenic brass or sterling silver, designed to last and made to be worn every day — from morning coffee to candlelit dinners.
              </p>
              <Link
                to="#"
                className="inline-flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-velmora-obsidian border-b border-velmora-obsidian pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
