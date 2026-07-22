import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-72 sm:h-96 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Velmora jewelry craftsmanship"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex items-center bg-brand-sand/40 px-6 py-12 sm:px-10 lg:px-16">
          <div className="max-w-lg">
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title mt-2">Jewelry Made with Intention</h2>
            <p className="mt-6 text-brand-ink/80 leading-relaxed">
              Velmora was born from a belief that fine jewelry should feel accessible, intentional, and deeply personal. Every piece is designed in-house and crafted with care, using premium materials that are meant to be worn every day — not saved for special occasions.
            </p>
            <p className="mt-4 text-brand-ink/80 leading-relaxed">
              From our family-owned workshop to your jewelry box, we keep the process transparent, the design timeless, and the quality uncompromising.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-outline">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
