import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80 max-w-md mx-auto leading-relaxed">
            Demi-fine jewelry designed for quiet luxury. Ethically made, endlessly wearable.
          </p>
          <div className="mt-8">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
