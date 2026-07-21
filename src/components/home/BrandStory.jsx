import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1000&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-brand-muted">Our Story</p>
          <h2 className="section-title mt-3">Jewelry meant to move with you</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted md:text-base">
            Velmora was born from a simple belief: fine jewelry should feel effortless. We design demi-fine pieces in warm 18K gold plating that transition from day to evening, season to season. Every design is made in small batches with careful attention to finish, weight, and how it feels against the skin.
          </p>
          <Link to="/about" className="mt-6 btn-outline w-fit">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
