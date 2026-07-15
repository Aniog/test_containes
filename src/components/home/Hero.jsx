import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(28,25,23,0.35), rgba(28,25,23,0.55)), url(https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative section-container py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">Velmora Fine Jewelry</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
            Crafted to be Treasured
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-lg">
            Demi-fine gold jewelry designed for quiet luxury. From daily essentials to heirloom-worthy gifts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link to="/shop" className="btn-outline border-white text-white hover:bg-white hover:text-ink">
              Explore Gifts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
