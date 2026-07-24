import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="overflow-hidden rounded-sm border border-border">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1200&q=80"
            alt="Velmora jewelry detail"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="section-heading mt-3">Designed in small batches, made to last.</h2>
          <p className="mt-4 text-sm text-ink-secondary leading-relaxed">
            Velmora began with a simple belief: fine jewelry should feel effortless. We work with family-owned workshops to create demi-fine pieces in warm 18K gold plating, with careful attention to finish, weight, and how they sit on the body.
          </p>
          <p className="mt-3 text-sm text-ink-secondary leading-relaxed">
            Every piece is designed to be worn daily, layered freely, and gifted with intention.
          </p>
          <Link to="/" className="btn-outline mt-8 inline-flex">
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
