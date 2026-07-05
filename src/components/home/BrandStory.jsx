import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-surface border-y border-brand-divider">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl bg-brand-warm aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent">Our Story</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-brand-ink leading-[1.15]">
              Designed for real moments, made to last.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-brand-muted leading-relaxed">
              Velmora was founded on a simple belief: fine jewelry should feel accessible, wearable, and intentional. We work with small ateliers to create demi-fine pieces in warm 18K gold plating, with careful attention to finish, comfort, and longevity.
            </p>
            <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
              Every piece is designed to be worn daily, layered effortlessly, and gifted with confidence.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:text-brand-accent transition-colors"
            >
              Read our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
