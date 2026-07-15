import React, { useEffect, useRef } from 'react';
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
    <section ref={containerRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              data-strk-img-id="story-img-1"
              data-strk-img="[story-title] [story-subtitle]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 lg:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight"
            >
              Jewelry That Speaks Softly
            </h2>
            <p
              id="story-subtitle"
              className="font-sans text-sm md:text-base text-text-secondary mt-5 leading-relaxed max-w-md"
            >
              Velmora was born from a belief that luxury should feel personal, not performative. Each piece is thoughtfully designed with 18K gold plating and premium materials — made to accompany you through every chapter of your life.
            </p>
            <p className="font-sans text-sm md:text-base text-text-secondary mt-4 leading-relaxed max-w-md">
              We partner with skilled artisans who share our commitment to quality and sustainability, ensuring every earring, necklace, and huggie meets the highest standard of demi-fine craftsmanship.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs uppercase tracking-widest text-gold hover:text-gold-hover transition-colors"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
