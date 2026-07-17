import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1800&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="text-gold-light text-[11px] tracking-ultra uppercase mb-6 animate-[fadeUp_0.8s_ease-out]">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream leading-[1.1] mb-6 animate-[fadeUp_0.8s_ease-out_0.1s_both]">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-cream/70 text-sm md:text-base font-light max-w-md mx-auto mb-10 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
          Timeless demi-fine pieces designed for the modern woman. Gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-3.5 bg-gold hover:bg-gold-dark text-cream text-xs tracking-widest uppercase font-medium transition-all duration-300 rounded-sm animate-[fadeUp_0.8s_ease-out_0.3s_both]"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-cream/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-cream/40 rounded-full animate-[scrollHint_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
