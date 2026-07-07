import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-black/30"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-sub] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-sub"
          className="text-lg md:text-xl font-sans mb-10 tracking-widest uppercase opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          Demi-fine jewelry for your everyday elegance
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-500">
          <Link 
            to="/shop" 
            className="inline-block bg-white text-black px-10 py-4 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 font-medium"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
