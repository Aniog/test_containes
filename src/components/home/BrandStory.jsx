import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-gold-light overflow-hidden">
          <img
            alt="Velmora brand story"
            data-strk-img-id="brand-story-img-b2c4d6"
            data-strk-img="[brand-story-heading] [brand-story-text]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <span className="font-sans text-xs uppercase tracking-widest text-gold mb-4">Our Story</span>
          <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
            Where Timeless Craft Meets Modern Elegance
          </h2>
          <p id="brand-story-text" className="font-sans text-sm md:text-base text-warm-gray leading-relaxed mb-6">
            Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry that bridges the gap between costume and fine. Each piece is thoughtfully designed, meticulously crafted with 18K gold plating, and made to be worn every day — from morning coffee to evening cocktails.
          </p>
          <p className="font-sans text-sm md:text-base text-warm-gray leading-relaxed mb-8">
            We believe jewelry should tell your story. Not shout it.
          </p>
          <Link
            to="/about"
            className="inline-block self-start px-6 py-3 border border-gold text-gold font-sans text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
