import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
        alt="Gold jewelry editorial"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=80';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/85 max-w-lg leading-relaxed">
            Demi-fine jewelry in warm 18K gold plating, designed for everyday elegance and quiet luxury.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-warm hover:text-white transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
