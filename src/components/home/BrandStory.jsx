import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <div
              className="absolute inset-0 bg-warm-200"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="gold jewelry artisan workshop hands crafting editorial warm"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>
          <div className="py-4 md:py-8">
            <p className="text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
              Jewelry with Intention
            </h2>
            <p className="mt-6 text-warm-600 leading-relaxed">
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. 
              We design demi-fine pieces in small batches, using 18K gold plating and responsibly sourced materials 
              to create jewelry that feels elevated yet wearable every day.
            </p>
            <p className="mt-4 text-warm-600 leading-relaxed">
              Each piece is thoughtfully designed in our studio and finished by hand, ensuring that what you wear 
              carries the warmth and care of true craftsmanship.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.2em] uppercase text-charcoal-900 hover:text-gold-600 transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
