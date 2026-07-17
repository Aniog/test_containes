import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Demi-fine jewelry for everyday luxury
        </p>
        <Link
          to="/shop"
          className="btn-premium bg-white text-[#1A1A1A] hover:bg-[#C9A96E] hover:text-white inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
