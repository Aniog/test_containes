import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#1c1917]">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover opacity-80"
          />
        </div>
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-ultra text-accent">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Designed to be worn, made to last</h2>
          <p className="text-sm md:text-base text-ink-secondary leading-relaxed">
            Velmora was founded on a simple belief: fine jewelry should feel effortless. We work with small ateliers to create demi-fine pieces in 18K gold plating, using recycled metals and conflict-free crystals. Every piece is designed in New York and finished by hand.
          </p>
          <Link to="/about" className="btn-outline">
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
