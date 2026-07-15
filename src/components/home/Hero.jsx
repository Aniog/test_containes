import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1600x900/F6F3EE/B8860B?text=Velmora+Fine+Jewelry&font=playfair-display')" }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="text-white/90 text-base md:text-lg mb-10 max-w-xl mx-auto animate-slide-up">
          Demi-fine jewelry designed for the modern woman. Timeless pieces that transition from day to evening with effortless elegance.
        </p>
        <Link to="/shop" className="btn-primary animate-slide-up">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
