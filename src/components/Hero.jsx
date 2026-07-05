import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-ivory px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />
          <em>Treasured</em>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Demi-fine gold jewelry for life's most meaningful moments
        </p>
        <Link 
          to="/shop"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-12 bg-ivory bg-opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
