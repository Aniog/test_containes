import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
        alt="Gold jewelry editorial"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-white">
          <p className="text-xs font-medium tracking-widest uppercase opacity-90">Demi-fine jewelry</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">Crafted to be Treasured</h1>
          <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Quiet luxury for everyday rituals. 18K gold-plated pieces designed to feel as good as they look.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3 text-xs font-semibold tracking-widest uppercase text-brand-ink hover:bg-brand-warm transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
