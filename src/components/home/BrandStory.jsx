import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light">Our Story</h2>
            <p className="text-velmora-warm-gray leading-relaxed">
              At Velmora, we believe that jewelry should be both beautiful and accessible.
              Our pieces are crafted with intention, using demi-fine materials that offer
              the look and feel of fine jewelry at a price point that allows you to treat yourself.
            </p>
            <p className="text-velmora-warm-gray leading-relaxed">
              Each design is inspired by the timeless elegance of classic jewelry, reimagined
              for the modern woman who values quality, sustainability, and style.
            </p>
            <Link
              to="/about"
              className="inline-block border border-velmora-black text-velmora-black px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-velmora-black hover:text-white transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
