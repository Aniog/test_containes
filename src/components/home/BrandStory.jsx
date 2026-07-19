import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3">
              About Velmora
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark font-light leading-tight">
              Crafted with
              <br />
              <span className="font-semibold">Intention</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mt-6 mb-6" />
            <p className="text-brand-charcoal font-sans text-sm md:text-base leading-relaxed">
              Velmora was born from a belief that fine jewelry should not require a compromise between
              quality and accessibility. Every piece is designed in our atelier, crafted in 18K gold-plated
              metals, and finished by hand. We source conflict-free materials, partner with ethical
              manufacturers, and create pieces meant to be worn, loved, and passed down.
            </p>
            <p className="text-brand-charcoal font-sans text-sm md:text-base leading-relaxed mt-4">
              This is jewelry for the woman who dresses for herself — who values subtlety over logos,
              quality over quantity, and timelessness over trends.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase font-sans text-brand-gold hover:text-brand-gold-dark transition-colors border-b border-brand-gold pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}