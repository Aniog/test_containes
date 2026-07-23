import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#2C2C2C]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Gold jewelry"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2C2C2C]/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 opacity-90 tracking-wide">
          Demi-fine gold jewelry for life's most meaningful moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#C9A96E] text-white px-10 py-4 text-sm uppercase tracking-widest
                     hover:bg-[#B8943E] transition-all duration-300 hover:shadow-xl"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
