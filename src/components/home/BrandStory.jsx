import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-brand-warm">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <h2 className="section-title">Our Story</h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Velmora was born from a belief that fine jewelry should feel both timeless and accessible. We design each piece to be worn daily — refined enough for special occasions, comfortable enough for real life.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              Our materials are responsibly sourced, our finishes are durable, and our designs are made to age beautifully with you.
            </p>
            <Link to="/about" className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-ink border-b border-brand-ink pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
