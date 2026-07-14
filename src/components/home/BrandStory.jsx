import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://placehold.co/900x600/f5f0eb/8c7b6c?text=Velmora+Story&font=playfair-display"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-brand-accent">Our Story</p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-brand-ink sm:text-4xl">
            Designed with intention, worn with meaning.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Velmora was founded on the belief that fine jewelry should feel both timeless and attainable.
            Each piece is thoughtfully designed in-house and crafted in recycled 18K gold-plated brass,
            finished by hand for a warm, lived-in look.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex w-fit rounded-full border border-brand-ink px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:bg-brand-ink hover:text-white"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
