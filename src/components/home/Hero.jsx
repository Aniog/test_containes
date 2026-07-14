import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-brand-dark">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1600x900/f5f0eb/8c7b6c?text=Velmora+Fine+Jewelry&font=playfair-display')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-white/80">Demi-fine jewelry</p>
        <h1 className="mt-4 font-serif text-4xl font-medium text-white sm:text-5xl md:text-6xl">
          Crafted to be Treasured
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/80 sm:text-base">
          Warm, modern pieces in 18K gold plating — designed for gifting and self-purchase.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand-accentHover"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
