import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Velmora was born from a simple belief: jewelry should be treasured, not trendy.
              We create demi-fine pieces that bridge the gap between precious and accessible,
              using 18K gold plating and careful craftsmanship.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Each piece is designed to be worn every day, layered, gifted, and loved.
              From our hands to yours, we pour intention into every curve and clasp.
            </p>
            <Link
              to="/about"
              className="inline-block border border-[#C9A96E] text-[#C9A96E] px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
