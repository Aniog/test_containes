import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="about" className="bg-surface-warm section-padding section-padding-y overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-img-id="brand-story-main"
              data-strk-img="jewelry artisan hands crafting gold piece warm studio lighting editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
            >
              <div className="w-full h-full bg-gradient-to-br from-brand-gold-pale/20 to-surface-cream" />
            </div>
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-brand-gold/20 rounded-sm pointer-events-none" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-overline uppercase text-brand-gold mb-4">Our Story</p>
            <h2 className="font-serif text-heading-2 text-text-dark tracking-[0.03em] mb-6">
              Jewelry That Feels<br />Like You
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-body text-text-dark-secondary leading-relaxed">
                Velmora was born from a simple belief: fine jewelry shouldn't require a fine fortune. 
                We craft demi-fine pieces using 18K gold plating over quality base metals, creating 
                jewelry that looks and feels luxurious — without the markup.
              </p>
              <p className="font-sans text-body text-text-dark-secondary leading-relaxed">
                Every piece is designed in our studio, hand-finished, and tested for comfort. 
                We use only hypoallergenic materials because we believe beautiful jewelry 
                should never come at the cost of your skin.
              </p>
            </div>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.12em] text-brand-gold-dark hover:text-brand-gold transition-colors duration-300 font-medium group"
            >
              Read Our Story
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
