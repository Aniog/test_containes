import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 sm:py-24 bg-base-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-base-200">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink leading-tight">
              Designed in California, <br />
              <span className="italic text-gold-600">worn everywhere.</span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-ink/70 leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should be accessible, meaningful,
              and made to last. Every piece is designed in our California studio and crafted from
              18K gold-plated brass with hypoallergenic finishes — so you can wear it daily, gift it
              confidently, and treasure it for years.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
            >
              Read our full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
