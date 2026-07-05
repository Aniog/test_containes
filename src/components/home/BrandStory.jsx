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
    <section ref={containerRef} className="bg-cream">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 py-16 lg:px-16 lg:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-4xl lg:text-5xl font-light text-obsidian leading-tight mb-6"
              >
                Made with intention.<br />
                <em className="italic">Worn with love.</em>
              </h2>
              <p
                id="brand-story-text"
                className="font-sans text-sm text-stone leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last.
              </p>
              <p className="font-sans text-sm text-stone leading-relaxed mb-8">
                Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily, gifted with meaning, and treasured for years.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center font-sans text-xs font-semibold uppercase tracking-widest text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
