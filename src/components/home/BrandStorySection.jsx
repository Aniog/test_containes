import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <img
              alt="Velmora jewelry making"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="text-xs uppercase tracking-label text-accent mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-espresso font-light mb-6"
            >
              Designed for the Moments That Matter
            </h2>
            <p id="story-body" className="text-taupe leading-relaxed mb-6">
              Velmora was born from a simple belief: jewelry should feel special every day. We design demi-fine pieces in small batches, using 18K gold plating and hypoallergenic finishes so you can wear them from morning coffee to midnight toasts.
            </p>
            <p className="text-taupe leading-relaxed mb-8">
              Every piece is made to be layered, gifted, and treasured—without the traditional luxury markup.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-label text-espresso hover:text-accent transition-colors"
            >
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
