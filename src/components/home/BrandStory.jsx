import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-light)] mb-4">Our Story</p>
            <h2 className="serif-heading text-3xl md:text-4xl tracking-wide mb-6 leading-tight">
              Where Tradition<br />Meets Modern Elegance
            </h2>
            <div className="w-12 h-px bg-[var(--velmora-gold)] mb-6" />
            <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune. Our demi-fine pieces are crafted with the same care and attention as luxury jewelry, using 18K gold plating over sterling silver bases.
            </p>
            <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              Each piece is designed in our studio and made to be worn every day — because the best jewelry is the kind you never want to take off.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
