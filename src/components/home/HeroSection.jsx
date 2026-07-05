import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry on a warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-[0.05em] leading-tight animate-fade-in">
          Crafted to be
          <br />
          <span className="italic font-light">Treasured</span>
        </h1>
        <p className="mt-6 font-sans text-sm md:text-base text-white/70 max-w-md leading-relaxed tracking-wide animate-fade-in">
          Demi-fine gold jewelry designed for everyday elegance and made to last a lifetime.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center justify-center px-10 py-3.5 border-2 border-white/70 text-white font-sans text-sm tracking-[0.12em] uppercase transition-all duration-300 hover:bg-white hover:text-[#1a1a14] animate-fade-in"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
}