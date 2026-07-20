import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1600x900/1c1917/f6f4f0?text=Velmora+Fine+Jewelry&font=playfair-display')" }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="font-serif text-4xl text-white md:text-6xl lg:text-7xl">Crafted to be Treasured</h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
            Demi-fine jewelry designed for quiet luxury. Warm gold, refined silhouettes, and pieces meant to be worn every day.
          </p>
          <div className="mt-10">
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
