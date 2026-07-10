import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/5] rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80" alt="Brand story" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-brand-ink">Our Story</h2>
          <p className="mt-4 text-sm text-brand-muted leading-relaxed">
            Velmora was born from a simple belief: fine jewelry should feel effortless. We design demi-fine pieces in recycled 18K gold-plated brass, with careful attention to weight, finish, and how they sit against the skin. Every piece is made in small batches, with the intention of becoming part of your everyday story.
          </p>
          <Link to="/about" className="mt-6 inline-block text-xs font-semibold tracking-widest uppercase text-brand-accent hover:text-brand-accentHover transition-colors">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
