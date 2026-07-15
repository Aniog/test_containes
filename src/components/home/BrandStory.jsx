import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="aspect-[4/3] bg-[var(--color-bg-alt)] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80"
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-gold)] mb-3">Since 2018</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Story</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed mb-8">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We craft demi-fine pieces in 18K gold plating over sterling silver—substantial enough 
              to feel precious, accessible enough to become part of your daily ritual.
            </p>
            <p>
              Each piece is designed in our studio and made with care by artisans who share our 
              commitment to quiet luxury.
            </p>
          </div>
          <Link to="/about" className="btn btn-outline">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
