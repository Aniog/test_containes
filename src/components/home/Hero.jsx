import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 scale-105"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-headline] [hero-subheadline] gold jewelry model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 id="hero-headline" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Crafted to be Treasured
        </h1>
        <p id="hero-subheadline" className="text-lg md:text-xl font-sans uppercase tracking-[0.3em] mb-10 opacity-90 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Demi-fine gold jewelry for every story
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Link
            to="/shop"
            className="inline-block bg-white text-black px-10 py-5 font-sans uppercase tracking-widest text-sm hover:bg-white/90 transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};
export default Hero;
