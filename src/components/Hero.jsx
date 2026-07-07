import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide mb-6 animate-fade-in">
          Crafted to be<br />
          <span className="font-medium">Treasured</span>
        </h1>
        <p className="font-sans text-lg md:text-xl font-light tracking-wide mb-12 opacity-90 animate-slide-up">
          Demi-fine jewelry for everyday luxury
        </p>
        <Link 
          to="/shop"
          className="btn-secondary inline-flex items-center gap-2 hover:gap-4 transition-all duration-500"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white opacity-60" />
      </div>
    </section>
  );
}
