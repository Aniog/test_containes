import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#1c1917]">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/id/1070/1600/1000"
          alt="Gold jewelry editorial"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[92vh] items-end">
        <div className="section-container pb-16 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-ultra text-white/80">Velmora Fine Jewelry</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl text-white text-balance">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-white/80 leading-relaxed">
            Demi-fine gold jewelry for the modern collector. Designed in small batches, finished by hand, and made to last.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link to="/collections" className="btn-outline border-white text-white hover:bg-white hover:text-ink">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
