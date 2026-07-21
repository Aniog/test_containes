import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="woman wearing gold jewelry warm cinematic lighting close up editorial macro"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 w-full h-full bg-velmora-charcoal"
      />
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 animate-fade-in-down tracking-tight">
          Crafted to be Treasured
        </h1>
        <p className="text-[14px] md:text-lg mb-12 max-w-xl mx-auto font-sans tracking-widest uppercase opacity-80 animate-fade-in-up">
          Demi-fine gold jewelry for every occasion.
        </p>
        <div className="animate-fade-in-up delay-300">
          <Button asChild className="rounded-none h-14 px-12 bg-white text-velmora-charcoal hover:bg-velmora-gold hover:text-white border-none tracking-[0.3em] uppercase text-[11px] transition-luxury shadow-2xl">
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
};

export default HomeHero;
