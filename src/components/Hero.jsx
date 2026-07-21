import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Timeless demi-fine jewelry for life's most precious moments
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}