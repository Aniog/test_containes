import React from "react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--color-bg-alt)]">
      {/* Hero background - elegant placeholder representing warm-lit jewelry on model */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C2823] via-[#3D3730] to-[#4A4339]">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(197,164,110,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 70% 60%, rgba(197,164,110,0.1) 0%, transparent 60%)`
        }} />
        {/* Decorative jewelry silhouette elements */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border border-[var(--color-gold)]/30" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border border-[var(--color-gold)]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-40 bg-[var(--color-gold)]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="heading-serif text-5xl md:text-7xl text-white tracking-[-0.02em] mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-md mx-auto mb-10 font-light tracking-wide">
          Demi-fine gold jewelry for the woman who values quiet luxury.
        </p>
        <Link
          to="/shop"
          className="btn btn-accent inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-[10px] tracking-[0.2em]">
        SCROLL TO EXPLORE
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
