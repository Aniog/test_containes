import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="relative z-10 container-custom text-center px-4">
        <p className="text-xs uppercase tracking-widest text-white/80 mb-4 animate-fade-in">Demi-Fine Jewelry</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-8 animate-slide-up">
          Quiet luxury for the modern woman. 18K gold-plated pieces designed to layer, gift, and keep close.
        </p>
        <Link to="/shop" className="btn-primary inline-flex items-center gap-2 animate-slide-up">
          Shop the Collection
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
