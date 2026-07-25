import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[640px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container-editorial">
          <div className="max-w-xl text-white">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 text-sm md:text-base text-white/80 leading-relaxed">
              Demi-fine jewelry designed for the modern collector. Warm gold, quiet luxury,
              and pieces meant to be worn every day.
            </p>
            <div className="mt-8">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
