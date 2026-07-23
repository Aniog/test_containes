import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-rose-tint">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square bg-taupe/30 md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-subtitle]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craft"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
            <p className="text-xs uppercase tracking-widest text-gold">Our Story</p>
            <h2
              id="story-title"
              className="mt-4 font-serif text-4xl leading-[1.15] text-ink md:text-5xl"
            >
              Designed for the Woman Who Curates Her Own Moments
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-base leading-relaxed text-stone"
            >
              Velmora was born from a simple belief: fine jewelry should feel
              personal, not precious. Each piece is designed in-house and
              finished in 18K gold plate, made to layer through quiet mornings,
              bold evenings, and every small ritual in between.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block w-fit border-b border-gold pb-1 text-xs uppercase tracking-widest text-ink transition hover:text-gold"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
