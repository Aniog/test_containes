import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-in zoom-in duration-1000"
        data-strk-bg-id="hero-bg-98f2a"
        data-strk-bg="[hero-headline] [hero-subhead] gold jewelry on model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight">
          Crafted to be <br className="hidden md:block" /> Treasured
        </h1>
        <p id="hero-subhead" className="font-sans text-sm md:text-base uppercase tracking-widest mb-10 opacity-90">
          Demi-fine gold jewelry for every facet of you.
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-accent text-white px-10 py-4 font-serif uppercase tracking-[0.2em] text-sm hover:bg-accent/90 transition-all hover:scale-105"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
