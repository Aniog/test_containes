import React from 'react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center">
      {/* Background Image with search query */}
      <div 
        className="absolute inset-0 z-0 bg-stone-200"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-subheadline] gold jewelry model editorial warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white mt-20">
        <div className="max-w-2xl animate-fade-in">
          <h2 id="hero-subheadline" className="text-xs uppercase tracking-[0.4em] mb-6 font-medium">Fine Jewelry for Every Day</h2>
          <h1 id="hero-headline" className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Crafted to be <br /> Treasured
          </h1>
          <p className="text-base md:text-lg mb-10 opacity-90 font-light leading-relaxed max-w-lg">
            Elevate your everyday with our signature collection of demi-fine gold jewelry. Premium quality meet accessible luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/shop" className="btn-premium bg-white text-primary border-white hover:bg-gold hover:text-white">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative hairline */}
      <div className="absolute bottom-10 left-0 w-full h-[1px] bg-white/20" />
    </section>
  );
};

export default HomeHero;
