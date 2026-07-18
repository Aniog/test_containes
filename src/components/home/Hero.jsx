import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry that celebrates life's precious moments. Each piece is thoughtfully designed and crafted with care.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-velmora-black px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-opacity-90 transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white bg-opacity-50" />
      </div>
    </section>
  );
}