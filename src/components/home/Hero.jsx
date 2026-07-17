import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-velmora-cream">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-cream/30 to-velmora-cream/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide">
          Crafted to be<br />
          <span className="text-velmora-gold">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl mb-12 text-velmora-charcoal-light max-w-2xl mx-auto leading-relaxed">
          Discover our collection of demi-fine gold jewelry, designed for life's most
          precious moments. Each piece tells a story of craftsmanship and elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-charcoal text-white px-10 py-4 tracking-widest text-sm hover:bg-velmora-gold transition-all duration-300"
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-12 bg-velmora-charcoal/30" />
      </div>
    </section>
  );
};

export default Hero;