import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-brand-warm">
            <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80" alt="Brand story" className="h-full w-full object-cover" />
          </div>
          <div className="py-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-ink">Our Story</h2>
            <p className="mt-5 text-brand-muted leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should feel effortless. We design demi-fine pieces in warm 18K gold plating, with careful attention to detail, wearability, and longevity. Every piece is made to be worn daily — and treasured forever.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              From our studio to your jewelry box, we prioritize quality materials, considered design, and a quiet luxury that doesn’t shout.
            </p>
            <div className="mt-8">
              <Link to="/about">
                <span className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-accentHover transition-colors">Read Our Story →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
