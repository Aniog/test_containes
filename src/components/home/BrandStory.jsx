import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-md bg-brand-bg">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1000&q=80"
            alt="Brand story"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80';
            }}
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-ink">Our Story</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Velmora was born from a simple belief: fine jewelry should feel within reach. We design demi-fine pieces in warm 18K gold plating, using responsibly sourced materials and timeless silhouettes. Every piece is made to be worn daily, layered endlessly, and eventually passed down.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">
            From our studio to your jewelry box, we obsess over the details—because the best jewelry doesn’t shout. It whispers.
          </p>
          <Link to="/about" className="mt-6 inline-flex text-xs font-semibold uppercase tracking-widest text-brand-accent hover:text-brand-warm transition-colors">
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
