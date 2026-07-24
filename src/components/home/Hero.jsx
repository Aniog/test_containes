import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Crafted to be
          <br />
          <span className="font-normal">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine jewelry for the modern heirloom. Each piece designed with intention,
          made to last a lifetime.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium transition-colors"
        >
          Shop the Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-cream/50" />
      </div>
    </section>
  );
};

export default Hero;
