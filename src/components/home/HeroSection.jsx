import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[var(--color-gold-300)] animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm sm:text-base font-light mb-10 max-w-md mx-auto text-white/80 animate-slide-up stagger-2">
          Timeless pieces designed for everyday luxury. 18K gold plated, hypoallergenic, made to last.
        </p>
        <div className="animate-slide-up stagger-3">
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
