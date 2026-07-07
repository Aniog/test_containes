import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=17"
          alt="Velmora jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight animate-fade-in">
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="font-sans text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Each piece tells a story of quiet luxury and intentional beauty.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-white text-charcoal px-10 py-4 font-sans text-sm tracking-wider hover:bg-cream transition-colors btn-premium"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-px h-12 bg-white opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
