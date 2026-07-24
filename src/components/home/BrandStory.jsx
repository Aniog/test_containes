import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:pl-10">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Made with intention, worn with love
            </h2>
            <p className="mt-5 font-body text-base text-ink-secondary leading-relaxed">
              Velmora was founded on a simple belief: fine jewelry should feel accessible without
              compromising on craft. Every piece is designed in-house, finished in warm gold tones,
              and made to layer effortlessly from day to night.
            </p>
            <p className="mt-4 font-body text-base text-ink-secondary leading-relaxed">
              From our studio to your jewelry box, we obsess over the details so you can focus on
              what matters — wearing pieces that feel like you.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-ui text-sm font-semibold uppercase tracking-display text-ink transition-colors hover:text-accent"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
