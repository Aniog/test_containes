import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-headline"
          className="velmora-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#faf8f5] mb-6 leading-tight text-balance"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subheadline"
          className="text-sm sm:text-base md:text-lg text-[#faf8f5]/80 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry for the modern woman. Timeless pieces that elevate every moment.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#c9a96e] text-[#1a1a1a] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#faf8f5] hover:text-[#1a1a1a]"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-[#faf8f5]/50" />
      </div>
    </section>
  );
}
