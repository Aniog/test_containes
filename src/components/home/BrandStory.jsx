import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-padding bg-surface border-y border-border">
      <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://placehold.co/900x600/f7f5f2/1c1917?text=Velmora+Story"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Our Story</h2>
          <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
            Velmora was born from a belief that fine jewelry should feel both timeless and attainable. Each piece is designed in-house using responsibly sourced materials, finished with 18K gold plating, and made to be worn every day.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
            From our studio to your jewelry box, we obsess over the details so you can enjoy the sparkle.
          </p>
          <Link to="/about" className="btn-outline mt-8">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
