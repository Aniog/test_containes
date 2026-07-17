import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:pl-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Our Story</p>
          <h2 className="section-title mt-3">Designed for the everyday ritual</h2>
          <p className="mt-5 text-sm leading-relaxed text-brand-muted">
            Velmora was born from a belief that fine jewelry should feel as effortless as it looks. We source responsibly plated 18K gold and pair it with ethically selected crystals to create pieces that move with you — from morning meetings to evening gatherings.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Every design is made in small batches, finished by hand, and packaged in recyclable materials because we believe luxury and responsibility belong together.
          </p>
          <Link to="/" className="mt-8 inline-block text-xs font-semibold uppercase tracking-widest text-brand-ink underline decoration-brand-gold underline-offset-4 hover:text-brand-accent transition-colors">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
