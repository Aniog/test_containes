import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative flex h-[90vh] min-h-[600px] items-center justify-center overflow-hidden md:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141589-677acb0c3f2e?w=1600&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="animate-fade-in font-sans text-xs font-medium uppercase tracking-[0.15em] text-white/70">
          Velmora Fine Jewelry
        </p>
        <h1 className="mt-4 animate-slide-up font-serif text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
          Crafted to be
          <br />
          <span className="font-medium italic">Treasured</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg animate-fade-in font-sans text-sm leading-relaxed text-white/70 md:text-base">
          Demi-fine gold jewelry for women who value quiet elegance — 
          crafted with care, designed to be worn every day.
        </p>
        <div className="mt-8 animate-slide-up">
          <Link
            to="/shop"
            className="inline-block border border-white/30 bg-white/10 px-10 py-3 font-sans text-sm font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-foreground"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="h-10 w-[1px] bg-white/30" />
      </div>
    </section>
  );
}