import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2A2520] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] mb-6 leading-tight tracking-wide">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="text-lg md:text-xl text-[#FAF8F5] mb-10 opacity-90 max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for everyday elegance.
          Each piece tells a story of craftsmanship and intention.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-transparent border-2 border-[#FAF8F5] text-[#FAF8F5] px-10 py-4 text-sm tracking-wider uppercase hover:bg-[#FAF8F5] hover:text-[#2A2520] transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#FAF8F5] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#FAF8F5] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
