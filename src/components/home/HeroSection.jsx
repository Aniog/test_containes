import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="luxury gold jewelry warm lighting editorial model wearing gold necklace earrings"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso/90 to-taupe/80"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="text-gold-light text-xs tracking-mega-wide uppercase font-sans font-medium mb-6 animate-fade-up">
            New Collection 2026
          </p>
          <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl text-ivory mb-6 animate-fade-up-delay-1">
            Crafted to be<br />
            <span className="text-gold-light italic">Treasured</span>
          </h1>
          <p className="text-ivory/70 text-sm md:text-base leading-relaxed max-w-md mb-8 font-sans font-light animate-fade-up-delay-2">
            Demi-fine 18K gold-plated jewelry, designed for the modern woman.
            Hypoallergenic, timeless, and made to be worn every day.
          </p>
          <Link
            to="/shop"
            className="btn-gold text-xs animate-fade-up-delay-3"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40">
        <span className="text-[10px] tracking-ultra-wide uppercase font-sans">Scroll</span>
        <div className="w-px h-8 bg-ivory/20 animate-pulse" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .animate-fade-up-delay-1 { animation: fadeUp 0.8s ease-out 0.15s forwards; opacity: 0; }
        .animate-fade-up-delay-2 { animation: fadeUp 0.8s ease-out 0.3s forwards; opacity: 0; }
        .animate-fade-up-delay-3 { animation: fadeUp 0.8s ease-out 0.45s forwards; opacity: 0; }
      `}</style>
    </section>
  );
}
