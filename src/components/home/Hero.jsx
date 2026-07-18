import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-12 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine jewelry for the modern woman who appreciates quiet luxury. 
          Each piece tells a story of craftsmanship and intention.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-flex items-center gap-2 hover:gap-4 transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-0.5 h-12 bg-white opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
