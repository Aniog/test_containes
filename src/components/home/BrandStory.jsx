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
    <section id="about" ref={containerRef} className="bg-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6"
            >
              Made for the<br />
              <em className="italic">moments that matter</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last.
            </p>
            <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily, gifted with intention, and treasured for years.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-manrope text-xs tracking-[0.14em] uppercase text-obsidian hover:text-gold transition-colors duration-200 border-b border-obsidian hover:border-gold pb-0.5 self-start"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
