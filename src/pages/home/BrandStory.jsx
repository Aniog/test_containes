import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-base">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-ink">Our Story</h2>
            <p className="text-muted leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should feel accessible, personal, and timeless. We design each piece with intention, using quality materials and thoughtful details that make every day feel a little more special.
            </p>
            <p className="text-muted leading-relaxed">
              From our studio to your jewelry box, we prioritize craftsmanship, sustainability, and designs that transcend trends.
            </p>
            <Link
              to="/about"
              className="inline-block text-gold hover:text-gold-hover text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
