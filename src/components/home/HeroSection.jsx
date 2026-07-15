import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[92vh] min-h-[560px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry close up model warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 opacity-90">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm sm:text-base md:text-lg font-light opacity-90 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Timeless gold pieces designed for the modern woman — elegant,
          enduring, and effortlessly wearable.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-velmora-gold text-white text-xs sm:text-sm tracking-[0.2em] uppercase font-medium hover:bg-velmora-goldDark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
