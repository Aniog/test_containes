import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-wide animate-fade-in-up">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Demi-fine jewelry that bridges the gap between fashion and fine. 
          Timeless designs for the modern woman.
        </p>
        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <Link 
            to="/shop"
            className="inline-block px-10 py-4 bg-white text-[var(--color-text-primary)] font-sans text-sm tracking-wider hover:bg-[var(--color-gold-primary)] hover:text-white transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
