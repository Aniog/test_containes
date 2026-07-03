import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="section-subtitle">Our Story</p>
          <h2 className="section-title mt-3">Jewelry meant to be lived in</h2>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Velmora was born from a simple belief: fine jewelry shouldn’t be reserved for special occasions. Our pieces are designed for everyday rituals—morning coffee, late-night calls, and everything in between.
          </p>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Crafted in small batches using 18K gold plating and ethically sourced crystals, each piece balances quiet luxury with approachable price points.
          </p>
          <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-ink underline underline-offset-4 hover:text-accent">
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
