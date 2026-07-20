import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-14 sm:py-20 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="gold jewelry hands artisan workshop crafting demi-fine"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="py-2 md:py-6">
            <p className="text-xs font-medium tracking-superwide uppercase text-gold-600 mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-900 leading-snug">
              Designed with Intention, Worn with Joy
            </h2>
            <p className="mt-5 text-sm sm:text-base text-ink-600 leading-relaxed">
              Velmora was born from a belief that fine jewelry should feel attainable. We craft
              small-batch collections in 18K gold-plated finishes, designed to layer, stack, and
              live with you through every moment — from morning coffee to midnight celebrations.
            </p>
            <p className="mt-4 text-sm sm:text-base text-ink-600 leading-relaxed">
              Every piece is nickel-free, hypoallergenic, and made to last. Because the best
              jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-7 text-sm font-medium tracking-widest uppercase text-ink-900 hover:text-gold-700 transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
