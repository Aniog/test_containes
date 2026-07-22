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
    <section id="about" ref={containerRef} className="bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
            <p className="font-inter text-xs uppercase tracking-ultra-wide text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-ink leading-tight mb-8"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-inter text-sm text-taupe leading-relaxed mb-6"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed for the everyday — warm, wearable, and made to last.
            </p>
            <p className="font-inter text-sm text-taupe leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be gentle on skin and generous in spirit. We believe in accessible luxury — jewelry that feels like a treat, not a compromise.
            </p>
            <Link
              to="/shop"
              className="inline-block self-start font-inter text-xs uppercase tracking-widest text-ink border-b border-ink/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
