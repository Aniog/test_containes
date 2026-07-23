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
    <section id="story" ref={containerRef} className="bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="story-img-main-c4d5e6"
              data-strk-img="[story-body] [story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4 font-medium">
              Our Story
            </p>
            <h2 id="story-heading" className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight mb-6">
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p id="story-body" className="font-sans text-base text-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last for years.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily, gifted with meaning, and treasured for a lifetime.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-ink font-semibold hover:text-gold transition-colors group"
            >
              Read Our Story
              <span className="w-8 h-px bg-ink group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
