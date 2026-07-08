import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1600&q=80"
          alt="Gold jewelry editorial"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-4">Demi-Fine Jewelry</p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05]">
              Crafted to be<br />Treasured
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
              Warm, modern pieces in 18K gold. Designed for gifting and self-purchase, made to last.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary">Shop the Collection</Link>
              <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-brand-ink">Our Story</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
