import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SVG_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="story"
      ref={containerRef}
      className="py-20 md:py-0 bg-warm-mist"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[600px] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-s1t2u3"
            data-strk-img="[story-subhead] [story-headline] gold jewelry artisan craftsmanship"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={SVG_PLACEHOLDER}
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-16 md:py-20">
          <p
            id="story-subhead"
            className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold mb-5"
          >
            Our Story
          </p>
          <h2
            id="story-headline"
            className="font-cormorant text-4xl md:text-5xl font-light text-charcoal leading-tight"
          >
            Made with intention,<br />
            <em className="italic">worn with love</em>
          </h2>
          <div className="h-px bg-stone w-12 my-8" />
          <p className="font-inter text-sm text-bark leading-relaxed mb-4">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces designed to be worn every day — through coffee runs, boardroom meetings, and golden-hour dinners.
          </p>
          <p className="font-inter text-sm text-bark leading-relaxed mb-8">
            Each piece is crafted from 18K gold-plated brass and sterling silver, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels precious without the precious price tag.
          </p>
          <Link
            to="/"
            className="font-inter text-[10px] uppercase tracking-[0.2em] text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors self-start"
          >
            Read Our Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}
