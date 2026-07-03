import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-surface-muted">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-4 md:py-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">Our Philosophy</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Jewelry That Feels Like You
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              At Velmora, we believe fine jewelry should not be reserved for special occasions alone. Each piece is designed to be worn daily — understated enough for the office, elegant enough for evening.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Our 18K gold-plated pieces are crafted with precision and care, using hypoallergenic materials that are kind to sensitive skin. We design in small batches to ensure quality and reduce waste.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-foreground pb-1 text-xs font-medium tracking-[0.15em] uppercase hover:text-accent hover:border-accent transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
