import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-padding bg-[var(--color-ivory)]">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:pl-8">
            <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">Our Story</p>
            <h2 className="serif-heading text-4xl md:text-5xl mb-6 leading-tight">
              Where Tradition<br />Meets Modern Elegance
            </h2>
            <div className="w-16 h-px bg-[var(--color-gold)] mb-6" />
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-6">
              Born from a love of timeless design, Velmora creates demi-fine jewelry that bridges the gap between everyday wear and special occasion pieces. Each piece is crafted with 18K gold plating over sterling silver, ensuring lasting beauty without compromise.
            </p>
            <p className="text-[var(--color-warm-gray)] leading-relaxed mb-8">
              We believe luxury should be accessible. Our pieces are designed in our studio, ethically sourced, and made to be treasured for years to come.
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
