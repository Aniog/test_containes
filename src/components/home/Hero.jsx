import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Velmora Fine Jewelry - Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 font-light tracking-wide">
          Timeless pieces for life's most meaningful moments
        </p>

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 shadow-luxury-lg hover:shadow-xl"
        >
          Shop the Collection
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
