import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-grow"
        data-strk-bg-id="hero-bg-unique"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry model editorial warm lighting close-up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="relative z-10 text-center text-white px-6">
        <h1 
          id="hero-title"
          className="text-5xl md:text-8xl font-serif mb-6 flex flex-col items-center"
        >
          <span className="opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">Crafted to be</span>
          <span className="opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-forwards italic">Treasured</span>
        </h1>
        <p 
          id="hero-subtitle"
          className="text-sm md:text-lg uppercase-widest mb-10 opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-forwards"
        >
          Timeless demi-fine jewelry for every moment.
        </p>
        <div className="opacity-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-forwards">
          <Link 
            to="/collections" 
            className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 text-xs uppercase-widest hover:bg-accent hover:text-white transition-all duration-300 group"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-12 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
