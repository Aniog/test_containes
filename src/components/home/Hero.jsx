import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
        alt="Gold jewelry editorial"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8">
        <p className="text-xs uppercase tracking-widest text-white/80 md:text-sm">Demi-fine jewelry</p>
        <h1 className="mt-4 font-serif text-4xl text-white md:text-6xl lg:text-7xl">Crafted to be Treasured</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/85 md:text-base">
          Warm, editorial pieces in 18K gold plating. Designed for gifting and self-purchase, made to last.
        </p>
        <div className="mt-8">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
