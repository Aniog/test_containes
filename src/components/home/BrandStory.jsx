import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4">Our Story</p>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Where Timeless<br />Elegance Meets<br />Modern Craft
            </h2>
            <div className="w-12 h-px bg-[var(--color-gold)] mb-6" />
            <p className="text-[var(--color-soft-gray)] leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune. 
              Our demi-fine pieces are crafted with the same care and attention to detail as luxury 
              jewelry, using 18K gold plating over sterling silver bases.
            </p>
            <p className="text-[var(--color-soft-gray)] leading-relaxed mb-8">
              Each piece is designed in our studio, tested for everyday wear, and finished with 
              hypoallergenic materials so you can wear them with confidence, day after day.
            </p>
            <Link to="#" className="text-xs tracking-[0.2em] uppercase text-[var(--color-charcoal)] border-b border-[var(--color-charcoal)] pb-1 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
