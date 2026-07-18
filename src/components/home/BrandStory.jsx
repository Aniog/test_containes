import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
          <div className="w-16 h-px bg-velmora-gold mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4">
            At Velmora, we believe that jewelry should be as unique as the moments it marks.
            Founded with a passion for accessible luxury, we create demi-fine pieces that blend
            timeless elegance with modern sensibility.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Each piece is crafted with care, using 18K gold plating and hypoallergenic materials
            that are designed to be worn and loved every day. From self-purchase to meaningful gifting,
            Velmora is here to celebrate life's precious moments.
          </p>
          <Link
            to="/about"
            className="inline-block border-b-2 border-velmora-gold text-velmora-charcoal font-sans text-sm tracking-wider uppercase pb-1 hover:text-velmora-gold transition-colors"
          >
            Discover Our Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
