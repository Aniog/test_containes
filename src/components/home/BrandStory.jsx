import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream border border-border">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-[1.15] mb-6"
            >
              Jewelry That Feels Like Home
            </h2>
            <p
              id="brand-story-desc"
              className="text-taupe leading-relaxed mb-6 max-w-md"
            >
              Velmora was born from a simple belief: luxury should feel personal, not performative. 
              Each piece is designed in our New York studio, then cast and finished by artisans 
              who share our obsession with detail. We use 18K gold plating on hypoallergenic bases 
              — so you can wear your favorites every day, without the worry.
            </p>
            <p className="text-taupe leading-relaxed mb-8 max-w-md">
              Whether you are building a capsule jewelry wardrobe or searching for the perfect 
              gift, we are here to help you find something that feels undeniably you.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-dark hover:text-gold transition-colors duration-300 group"
            >
              Our Story
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
