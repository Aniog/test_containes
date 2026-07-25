import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-brand-warm">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title">Jewelry with soul, made for real life.</h2>
            <p className="text-brand-muted leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should feel as good as it looks. We design each piece to be worn daily, layered effortlessly, and passed down with pride. From our California studio to your jewelry box, every detail is considered.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
