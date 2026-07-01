import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-[var(--color-warm-white)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-square lg:aspect-auto">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1000&h=800&fit=crop"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-8 md:p-16 lg:p-24">
          <div className="max-w-md">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-500)] mb-4">Our Philosophy</p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6">Where Elegance Meets Everyday</h2>
            <div className="w-12 h-px bg-[var(--color-gold-400)] mb-6" />
            <p className="text-sm leading-relaxed text-[var(--color-velmora-700)] mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              Each piece is crafted with 18K gold plating over quality brass, designed to be worn daily and treasured always.
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-velmora-700)] mb-8">
              We work directly with artisans who share our commitment to quality and sustainability, 
              bringing you demi-fine pieces that rival designer collections at a fraction of the price.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
