import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[90vh] items-center">
        <div className="max-w-xl text-white">
          <p className="text-xs uppercase tracking-widest text-white/80">Demi-fine jewelry</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed">
            Warm, editorial jewelry designed for everyday luxury. 18K gold-plated pieces made to wear, gift, and keep.
          </p>
          <div className="mt-8">
            <Link
              to="/shop"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-warm transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
