import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center bg-[#2C2522] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#4A413D_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-30" />
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/id/1015/2000/1200)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.05] tracking-[2px] text-white mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-[#EDE7DC] text-lg md:text-xl tracking-wide mb-10 max-w-md mx-auto">
          Demi-fine jewelry for the modern woman who values quiet luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-[#8B7355] text-white text-sm tracking-[3px] hover:bg-[#6B553F] transition-colors"
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-xs tracking-[3px]">
        SCROLL TO EXPLORE
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
