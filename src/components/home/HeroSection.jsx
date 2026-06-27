import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-600 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-velmora-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-velmora-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be
          <br />
          <em className="text-velmora-gold-light">Treasured</em>
        </h1>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light tracking-wide">
          Demi-fine jewelry designed for everyday elegance.
          Each piece tells a story of quiet luxury and timeless beauty.
        </p>
        
        <a
          href="/shop"
          className="btn-gold inline-flex items-center space-x-2 text-sm uppercase tracking-wider"
        >
          <span>Shop the Collection</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-velmora-white opacity-60"></div>
      </div>
    </section>
  );
}
