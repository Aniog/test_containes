import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-600 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Crafted to be
          <br />
          <span className="font-normal">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine jewelry for everyday luxury. Each piece tells a story of craftsmanship and intention.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 
                     uppercase tracking-widest text-sm hover:bg-white hover:text-velmora-charcoal transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-px h-12 bg-white opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;
