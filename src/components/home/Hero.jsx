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
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/80">Velmora Fine Jewelry</p>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
              Crafted to be Treasured
            </h1>
            <p className="mt-6 text-sm md:text-base text-white/85 leading-relaxed max-w-lg">
              Demi-fine gold jewelry designed for quiet luxury. Modern silhouettes, warm finishes, and pieces meant to be worn every day.
            </p>
            <div className="mt-8">
              <Link to="/shop" className="btn-primary">Shop the Collection</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
