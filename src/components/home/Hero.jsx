import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-white">
          <p className="eyebrow text-white/80">New Collection</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Demi-fine jewelry in warm 18K gold plating, designed for quiet luxury and everyday elegance.
          </p>
          <div className="mt-8">
            <Link to="/shop" className="btn-primary bg-white text-ink border-white hover:bg-transparent hover:text-white">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
