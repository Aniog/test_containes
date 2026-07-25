import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 leading-tight">
          Crafted to be<br />
          <span className="font-semibold">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine gold jewelry designed for everyday elegance and life's most meaningful moments
        </p>
        <Link 
          to="/shop"
          className="btn-accent inline-block"
        >
          Shop the Collection
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
