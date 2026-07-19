import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-subtitle]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p id="brand-story-subtitle" className="text-xs uppercase tracking-widest text-brand-accent mb-3">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-brand-ink">Jewelry meant to be worn, not saved.</h2>
            <p className="mt-5 text-sm text-brand-muted leading-relaxed">
              Velmora was founded on a simple belief: fine jewelry should feel accessible, personal, and effortlessly elegant. Every piece is designed in-house and crafted from 18K gold-plated materials chosen for their warmth, durability, and wearability.
            </p>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed">
              From our studio to your jewelry box, we obsess over the details so you can enjoy them every day.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover transition-colors">
              Read Our Story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
