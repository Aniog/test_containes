import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
        alt="Velmora fine jewelry"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="relative z-10 flex h-full items-end">
        <div className="container-editorial pb-16 md:pb-24">
          <p className="eyebrow text-white/80">New Collection</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
            Crafted to be<br />Treasured
          </h1>
          <p className="mt-4 max-w-md text-sm md:text-base text-white/85 leading-relaxed">
            Demi-fine jewelry in warm 18K gold plating, designed for everyday elegance and quiet luxury.
          </p>
          <div className="mt-8">
            <Link to="/shop" className="btn-accent">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
