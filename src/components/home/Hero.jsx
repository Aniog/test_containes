import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/80">Demi-Fine Jewelry</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight tracking-wide">
            Crafted to be Treasured
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
            Timeless pieces in 18K gold, designed for the modern woman. Quiet luxury, everyday elegance.
          </p>
          <div className="mt-10">
            <Link to="/shop" className="btn-primary bg-white text-brand-charcoal hover:bg-brand-sand">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
