import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image via stock system */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-velmora-a1b2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&auto=format&fit=crop&q=80')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p
          id="hero-subtitle"
          className="mb-4 text-[11px] font-medium tracking-[0.35em] uppercase text-white/80"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.1] tracking-wide max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-5 max-w-md text-sm sm:text-base text-white/80 leading-relaxed">
          Timeless pieces designed for the modern woman — elegant, affordable, and made to last.
        </p>
        <Link
          to="/collection"
          className="mt-8 btn-primary"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="h-10 w-[1px] bg-white/40 mx-auto animate-pulse" />
      </div>
    </section>
  );
}
