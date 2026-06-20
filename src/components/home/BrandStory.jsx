import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-brand-sand">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80"
            alt="Velmora jewelry craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-brand-gold">Our Story</p>
          <h2 className="section-heading">Designed to be worn, made to last.</h2>
          <p className="text-sm leading-relaxed text-brand-muted">
            Velmora was born from a simple belief: fine jewelry doesn't have to be reserved for special
            occasions. Our pieces are crafted in warm 18K gold-plated brass, designed in California,
            and made to move with you — from morning meetings to evening celebrations.
          </p>
          <Link to="/about" className="btn-outline">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
