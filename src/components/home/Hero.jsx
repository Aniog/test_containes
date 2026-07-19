import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-[88vh] min-h-[640px] overflow-hidden bg-warmBlack">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-7c91f2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1800"
      />

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-warmBlack/30 via-warmBlack/20 to-warmBlack/65" />

      {/* Headline */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p
          id="hero-eyebrow"
          className={`font-sans text-[10px] md:text-[11px] uppercase tracking-widest3 text-ivory/80 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Velmora Fine Jewelry · Est. 2024
        </p>
        <h1
          id="hero-title"
          className={`mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Crafted to be
          <br />
          <em className="italic font-light text-ivory/95">Treasured</em>
        </h1>
        <p
          id="hero-subtitle"
          className={`mt-7 max-w-md text-sm md:text-base text-ivory/75 leading-relaxed font-light transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Demi-fine jewelry in 18K gold plating — designed in small batches and
          finished by hand.
        </p>
        <div
          className={`mt-10 flex items-center gap-3 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="font-sans text-[11px] uppercase tracking-widest2 text-ivory/85 hover:text-ivory inline-flex items-center gap-2 py-4 px-3 transition-colors"
          >
            Our Story <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <div className="w-px h-10 bg-ivory/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-ivory/80 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
