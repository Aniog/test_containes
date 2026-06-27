import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <div
              className="absolute inset-0 bg-charcoal"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="[brand-story-heading] [brand-story-subheading]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-4 block">
              Our Story
            </span>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight"
            >
              Jewelry with soul, designed for real life
            </h2>
            <p
              id="brand-story-subheading"
              className="text-muted text-sm md:text-base leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
              Our pieces are designed to be worn daily — to elevate your everyday, to mark your milestones, 
              and to become part of your story.
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over hypoallergenic brass, 
              ensuring lasting beauty and comfort for sensitive skin. We work with skilled artisans 
              who share our commitment to quality and ethical practices.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-charcoal hover:text-gold transition-colors group"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
