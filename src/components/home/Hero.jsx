import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif-display text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />
          <em className="italic">Treasure</em>d
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine jewelry designed for everyday elegance. Each piece tells a story of craftsmanship, 
          intention, and timeless beauty.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#B8860B] text-white px-10 py-4 uppercase tracking-wider text-sm font-medium hover:bg-[#A0780A] transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
