import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/seed/velmora-story/800/1000"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.25em] uppercase text-brand-accent mb-3">Our Story</p>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-ink mb-6">Designed to be worn,<br />made to last.</h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry should feel effortless. We design demi-fine pieces in 18K gold that transition from day to night, from casual to occasion, without the intimidating price tag.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Every piece is crafted with intention, using quality materials and thoughtful details that make Velmora feel like your own.
            </p>
            <Link
              to="/"
              className="inline-block border border-brand-ink text-brand-ink text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-brand-ink hover:text-white transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
