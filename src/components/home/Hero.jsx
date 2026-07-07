import React from 'react';
import { ArrowRight } from 'lucide-react';

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
        <div className="absolute inset-0 bg-velmora-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl text-velmora-ivory mb-6 leading-tight">
          Crafted to be
          <br />
          <em className="italic font-light">Treasured</em>
        </h1>

        <p className="text-lg md:text-xl text-velmora-ivory/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry that celebrates life's precious moments.
          Each piece is thoughtfully designed for the modern woman who appreciates quiet luxury.
        </p>

        <a
          href="/shop"
          className="inline-flex items-center px-10 py-4 bg-velmora-gold text-white font-medium tracking-wider uppercase hover:bg-velmora-gold-dark transition-all duration-500 group"
        >
          Shop the Collection
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-velmora-ivory/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-velmora-ivory animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
