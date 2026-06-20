import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80"
          alt="Gold jewelry on model"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base-950/30 via-base-950/20 to-base-950/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 md:text-sm">Demi-Fine Fine Jewelry</p>
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base-100/90 md:text-lg">
          Timeless pieces in 18K gold, designed for the modern woman. Quiet luxury, everyday elegance.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/shop" className="btn-primary bg-white text-base-950 hover:bg-base-100">
            Shop the Collection
          </Link>
          <Link to="/about" className="btn-outline border-white/40 text-white hover:bg-white hover:text-base-950">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
