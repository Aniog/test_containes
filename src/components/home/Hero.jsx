import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora jewelry hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/90 font-light">
          Demi-fine gold jewelry for everyday luxury
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-4 text-sm tracking-widest transition-colors"
        >
          SHOP THE COLLECTION
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
