import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 md:px-8 md:pb-24">
        <div className="max-w-2xl text-white">
          <p className="section-subtitle text-white/90">New Collection</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 max-w-md text-sm md:text-base text-white/85 leading-relaxed">
            Demi-fine gold jewelry designed for quiet luxury. Made to wear, gift, and keep close.
          </p>
          <div className="mt-8">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
