import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="luxury gold jewelry editorial photography warm lighting model wearing necklace"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C2622]/80 via-[#2C2622]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 w-full">
        <div className="max-w-lg">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
            Fine Demi-Fine Jewelry
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl text-[#FAF7F2] leading-[1.1] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p className="text-[#E8DFD5]/80 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
            Discover elegant 18K gold-plated jewelry designed for the modern woman.
            Accessible luxury that lasts.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-[#C9A84C] text-[#2C2622] px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold rounded-sm hover:bg-[#E8DFD5] transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
