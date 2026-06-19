import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=900&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-velmora-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold-light mb-4 animate-fade-in">
          Fine Jewelry Collection
        </p>
        <h1 className="font-serif text-display text-white mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-body-lg text-white/80 mb-10 max-w-md mx-auto animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Discover our collection of premium demi-fine gold jewelry, designed for the modern woman who values quiet luxury.
        </p>
        <Link to="/shop" className="btn-gold inline-block animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-10 bg-white/30 relative">
          <div className="w-[1px] h-5 bg-white absolute top-0 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
