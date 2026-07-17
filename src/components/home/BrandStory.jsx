import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="about" className="section-padding py-20 md:py-28 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
          <div
            className="absolute inset-0 bg-surface-2"
            data-strk-bg-id="brand-story-img-7h8i9j"
            data-strk-bg="[story-text] [story-heading] jewelry artisan craft gold workshop"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="800"
          />
          {/* Subtle border accent */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm" />
          {/* Decorative corner accent */}
          <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-gold/30" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-gold/30" />
        </div>

        {/* Text */}
        <div className="lg:pl-8">
          <p className="section-subtitle mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.15] mb-6" id="story-heading">
            Where Everyday Meets<br />
            <span className="text-gold italic">Extraordinary</span>
          </h2>
          <p className="text-cream-muted leading-relaxed mb-6" id="story-text">
            Velmora was born from a simple belief: that luxury jewelry shouldn't require
            a luxury price tag. Every piece in our collection is crafted from 18K
            gold-plated materials, designed to be worn daily and treasured for years.
          </p>
          <p className="text-cream-muted leading-relaxed mb-8">
            We work directly with skilled artisans to bring you demi-fine jewelry that
            bridges the gap between costume and fine jewelry — pieces that feel
            indulgent, look stunning, and fit effortlessly into your life.
          </p>
          <Link
            to="#"
            className="inline-flex items-center gap-2 text-sm text-gold tracking-wider uppercase hover:text-gold-light transition-colors group"
          >
            Read Our Full Story
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
