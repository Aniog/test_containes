import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-6 opacity-80">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-sm md:text-base font-light tracking-wide max-w-md mb-10 opacity-90">
          Elevated essentials designed for everyday luxury. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="bg-velmora-gold text-white text-xs font-sans tracking-[0.2em] uppercase px-10 py-4 hover:bg-velmora-goldDark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
