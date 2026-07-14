import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded overflow-hidden">
            <img
              src="https://picsum.photos/seed/velmora-story/800/1000"
              alt="Velmora fine jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="section-title">Timeless Elegance,<br />Thoughtfully Made</h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p className="text-warm-gray text-sm md:text-base leading-relaxed font-sans">
              At Velmora, we believe fine jewelry should be both beautiful and 
              accessible. Each piece is designed in-house and crafted from premium 
              18K gold-plated materials, finished by hand to ensure lasting quality.
            </p>
            <p className="text-warm-gray text-sm md:text-base leading-relaxed font-sans mt-4">
              From our workshop to your jewelry box — no markups, no middlemen. 
              Just heirloom-quality pieces made to be worn, loved, and passed down.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-medium text-warm-black hover:text-gold transition-colors"
              >
                Our Story
                <span className="w-8 h-px bg-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}