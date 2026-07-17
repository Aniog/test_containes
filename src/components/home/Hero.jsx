import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 font-['Cormorant_Garamond'] tracking-wide">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman who appreciates quiet luxury
          and timeless elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#C9A96E] text-white px-8 py-4 hover:bg-[#B8943E] transition-colors tracking-wider text-sm"
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
}
