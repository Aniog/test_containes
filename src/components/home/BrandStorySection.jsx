import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '@/components/ProductImage';

export default function BrandStorySection() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="aspect-[4/5] bg-cream-200 overflow-hidden">
            <ProductImage
              imgId="brand-story-img"
              query="[story-title] [story-subtitle] gold jewelry artisan"
              ratio="4x5"
              width={900}
              alt="Velmora jewelry craftsmanship"
              className="transition-transform duration-1000 hover:scale-105"
            />
          </div>

          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-5xl font-medium leading-tight"
            >
              Designed for the Woman Who Knows
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-warmgray-600 leading-relaxed"
            >
              Velmora was born from a simple belief: fine-feeling jewelry should be
              attainable. We work with skilled artisans to create demi-fine pieces in
              18k gold plate — pieces that feel special, wear beautifully, and do not
              require an occasion.
            </p>
            <p className="mt-4 text-warmgray-600 leading-relaxed">
              Every design is refined down to its essence: clean lines, warm metal,
              and just enough detail to catch the light. Because the best jewelry is
              the kind you reach for every day.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-xs tracking-[0.2em] uppercase font-medium border-b border-gold pb-1 text-ink hover:text-gold-dark transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
