import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text Right */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
            <div className="w-16 h-px bg-[#B8860B]" />
            <p className="text-gray-600 leading-relaxed">
              Founded on the belief that beautiful jewelry should be accessible without compromising on quality, 
              Velmora creates demi-fine pieces that bridge the gap between costume and fine jewelry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each piece is crafted with 18K gold plating over sustainable base metals, designed to be worn 
              every day and cherished for years to come.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm uppercase tracking-wider text-[#B8860B] hover:opacity-70 transition-opacity"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
