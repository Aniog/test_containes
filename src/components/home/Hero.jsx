import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[12s] ease-linear hover:scale-105"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1800&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-brand-black/10 to-brand-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="text-xs uppercase tracking-widest text-white/80 md:text-sm">Demi-Fine Jewelry</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
          Quiet luxury for everyday moments. Warm gold, refined design, and pieces meant to last.
        </p>
        <Link to="/shop" className="btn-primary mt-8">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
