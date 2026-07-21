import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Demi-fine gold jewelry for life's quiet moments and grand celebrations alike.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-velmora-gold hover:bg-velmora-gold-dark text-white px-10 py-4 text-sm tracking-widest uppercase transition-colors duration-300"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
