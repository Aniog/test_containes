import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1600x900/1c1917/f7f5f2?text=Velmora+Fine+Jewelry')" }}
      />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="relative z-10 container-editorial text-center text-surface">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-surface/90 max-w-xl mx-auto leading-relaxed">
          Demi-fine gold jewelry designed for quiet luxury, everyday elegance, and the moments that matter.
        </p>
        <Link to="/shop" className="btn-primary mt-8 md:mt-10">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
