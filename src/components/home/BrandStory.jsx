import React from 'react';
import { Link } from 'react-router-dom';

const placeholder = (label) =>
  `https://placehold.co/800x1000/F6F3EE/B8860B?text=${encodeURIComponent(label)}&font=playfair-display`;

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={placeholder('Velmora Craftsmanship')}
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="section-title">Our Story</h2>
            <div className="mt-6 space-y-4 text-brand-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and made to last. Founded in 2020, we design each piece with intention, using premium materials and ethical practices.
              </p>
              <p>
                From our studio in California, we create demi-fine jewelry that bridges the gap between everyday wear and special occasion elegance. Every design is a tribute to the women who wear it.
              </p>
            </div>
            <Link to="/about" className="btn-outline mt-8 inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
