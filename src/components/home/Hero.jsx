import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 py-32 md:px-8">
        <div className="max-w-xl text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">New Collection</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
            Crafted to be Treasured
          </h1>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-white/85">
            Demi-fine jewelry in warm 18K gold plating, designed for quiet luxury and everyday elegance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link to="/shop" className="btn-outline border-white text-white hover:bg-white hover:text-brand-ink">
              Explore Gifts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
