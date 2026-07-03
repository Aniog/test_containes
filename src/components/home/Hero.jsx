import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.55,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" aria-hidden="true" />

      <div className="relative z-10 flex h-full items-center">
        <div className="section-container py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Velmora Fine Jewelry</p>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-white md:text-6xl lg:text-7xl">
              Crafted to be Treasured
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
              Demi-fine jewelry in warm 18K gold plating, designed for quiet luxury and everyday elegance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
              <Link to="/shop?category=earrings" className="btn-outline border-white text-white hover:bg-white hover:text-ink">
                Explore Earrings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
