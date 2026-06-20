import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-base/20 to-base/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-light mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Each piece is thoughtfully crafted to elevate your everyday style.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;