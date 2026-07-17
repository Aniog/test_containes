import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-black mb-6 leading-[1.15]">
              Where Elegance
              <br />
              <span className="italic">Meets Intention</span>
            </h2>
            <div className="w-16 h-px bg-velmora-gold mb-8" />
            <p className="text-sm sm:text-base text-velmora-stone leading-relaxed mb-6">
              Velmora was born from a belief that luxury should be accessible,
              not exclusive. Each piece in our collection is thoughtfully
              designed to bring a touch of everyday elegance to the modern
              woman's life.
            </p>
            <p className="text-sm sm:text-base text-velmora-stone leading-relaxed mb-8">
              We work with skilled artisans who share our commitment to quality
              and craftsmanship. Every clasp, every setting, every finish is
              considered — because details matter.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-sans font-medium text-velmora-black hover:text-velmora-gold transition-colors group"
            >
              Read Our Story
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
