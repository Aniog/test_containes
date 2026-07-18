import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-heading] [brand-story-body]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              Jewelry Made With Intention
            </h2>
            <p
              id="brand-story-body"
              className="mt-5 md:mt-6 text-muted leading-relaxed max-w-md"
            >
              Velmora was born from a simple belief: that fine jewelry should feel personal, not
              precious. We design demi-fine pieces in small batches, using 18K gold plating and
              ethically sourced materials. Each collection tells a story — yours to wear, gift, and
              treasure.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium uppercase tracking-wide text-foreground hover:text-accent transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
