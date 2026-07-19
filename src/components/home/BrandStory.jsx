import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-velmora-gold opacity-20 -z-10" />
          </div>

          {/* Text Side */}
          <div className="md:pl-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h2>
            <div className="w-24 h-0.5 bg-velmora-gold mb-8" />
            <p className="font-sans text-gray-700 mb-6 leading-relaxed">
              At Velmora, we believe that jewelry should be as unique as the woman who wears it.
              Our pieces are crafted with intention, using only the finest materials to create
              demi-fine jewelry that bridges the gap between luxury and accessibility.
            </p>
            <p className="font-sans text-gray-700 mb-8 leading-relaxed">
              Each design is inspired by the modern woman's need for versatile, timeless pieces
              that transition seamlessly from day to night, from office to evening soirée.
              We're not just creating jewelry; we're crafting heirlooms for the everyday.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              Discover Our Journey
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
