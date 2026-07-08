import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[640px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/velmora-hero/1600/900')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-white/80 text-xs tracking-[0.25em] uppercase mb-4 animate-fade-in">Demi-Fine Jewelry</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-slide-up">
              Crafted to be Treasured
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-lg animate-slide-up">
              Modern heirlooms in 18K gold. Designed for everyday elegance, priced for real life.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-white text-brand-ink text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-brand-warm transition-colors animate-slide-up"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
