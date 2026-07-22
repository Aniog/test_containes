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
    <section id="about" ref={containerRef} className="py-0 bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-3c4d5e"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-espresso leading-tight mb-6"
            >
              Jewelry That Tells<br />
              <em>Your Story</em>
            </h2>
            <p
              id="brand-story-body"
              className="font-inter text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-inter text-sm text-stone leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. We believe in accessible luxury — jewelry that feels like an heirloom, priced for real life.
            </p>
            <Link
              to="/shop"
              className="self-start font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
