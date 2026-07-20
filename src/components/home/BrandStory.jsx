import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="gold jewelry crafting artisan workshop hands"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
              Designed for the<br />Woman Who Knows
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry should feel accessible, not exclusive. 
              Every piece is crafted from 18K gold-plated materials and designed to be worn daily — 
              from morning coffee to evening celebrations. We partner with artisans who share our 
              commitment to quality, sustainability, and timeless design.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              No fast fashion. No fleeting trends. Just beautifully made jewelry that becomes part of your story.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
