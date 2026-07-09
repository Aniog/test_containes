import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-9f2a"
        data-strk-bg="gold jewelry warm lighting editorial close up luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="font-sans text-overline uppercase tracking-mega-wide text-gold-light mb-4 animate-fade-in">
          Fine Jewelry Collection
        </p>
        <h1 className="font-serif text-display md:text-[5rem] text-white mb-6 animate-fade-in-delay-1 text-balance">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-body-lg text-white/80 mb-10 max-w-md mx-auto leading-relaxed animate-fade-in-delay-2">
          Demi-fine 18K gold jewelry designed for the modern woman. Elegant enough for special occasions, durable enough for everyday.
        </p>
        <Link
          to="/shop"
          className="btn-gold text-xs animate-fade-in-delay-3"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll-dot" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-delay-1 { animation: fade-in 1s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-delay-2 { animation: fade-in 1s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in-delay-3 { animation: fade-in 1s ease-out 0.6s forwards; opacity: 0; }
        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.3; }
        }
        .animate-scroll-dot { animation: scroll-dot 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
