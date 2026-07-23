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
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-espresso leading-tight mb-6"
            >
              Born from a love of<br />
              <em>quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p
              id="brand-story-body"
              className="font-inter text-sm text-warm-gray leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces that feel luxurious, wear beautifully, and last for years.
            </p>
            <p className="font-inter text-sm text-warm-gray leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn every day, layered, gifted, and treasured. Because you deserve to feel beautiful, always.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-espresso hover:text-gold transition-colors group"
            >
              Our Story
              <span className="w-8 h-px bg-espresso group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
