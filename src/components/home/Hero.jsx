import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="max-w-xl animate-slide-up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-accent-light mb-4">
              Demi-Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4">
              Crafted to be Treasured
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8 max-w-md">
              Quiet luxury for the modern woman. 18K gold-plated pieces designed to be worn, loved, and passed down.
            </p>
            <Link to="/shop" className="btn-primary bg-white text-ink hover:bg-accent hover:text-ink">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
