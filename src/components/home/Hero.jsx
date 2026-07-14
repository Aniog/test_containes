import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-white">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-velmora-fg"
        data-strk-bg-id="hero-bg-vlm-01"
        data-strk-bg="[hero-subtitle] [hero-title] luxury gold jewelry model close-up warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <p id="hero-subtitle" className="uppercase tracking-[0.4em] text-[10px] mb-6 md:mb-8 font-medium">Fine Jewelry for Every Day</p>
        <h1 id="hero-title" className="text-4xl md:text-7xl font-serif mb-8 md:mb-12 tracking-wide font-light leading-tight">
          Crafted to be Treasured
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/shop">
            <Button className="bg-white text-velmora-fg hover:bg-velmora-gold hover:text-white rounded-none uppercase tracking-[0.3em] text-[10px] px-10 py-7 transition-all duration-500">
              Shop the Collection
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-velmora-fg rounded-none uppercase tracking-[0.3em] text-[10px] px-10 py-7 transition-all duration-500">
              The Velmora Story
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Discover</span>
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
