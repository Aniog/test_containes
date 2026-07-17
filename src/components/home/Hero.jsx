import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="relative h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/80 mb-3">New Collection</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-wide">
              Crafted to be Treasured
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-lg">
              Demi-fine jewelry designed for the modern woman. Warm, editorial, and made to be worn every day.
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
