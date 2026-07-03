import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container-narrow">
          <div className="max-w-xl animate-slide-up">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">Demi-Fine Jewelry</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
              Crafted to be <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="mt-5 text-sm md:text-base text-white/85 leading-relaxed max-w-md">
              Warm, editorial jewelry designed for everyday elegance. 18K gold-plated, hypoallergenic, and made to last.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
              <Link to="/shop?category=earrings" className="btn-outline border-white text-white hover:bg-white hover:text-brand-ink">
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
