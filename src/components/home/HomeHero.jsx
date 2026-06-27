import React from 'react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative h-[90vh] sm:h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background image placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26,24,20,0.3), rgba(26,24,20,0.5)), url('https://placehold.co/1920x1080/1a1814/c9a96e?text=Warm+Gold+Jewelry+Editorial')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.3em] uppercase text-gold-light mb-6 sm:mb-8">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6 sm:mb-8">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm sm:text-base text-cream/80 max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed font-light">
          Timeless pieces in 18K gold, designed for the modern woman. Quiet luxury, everyday elegance.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-gold text-charcoal text-[11px] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[9px] font-sans tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/60 to-transparent" />
      </div>
    </section>
  );
};

export default HomeHero;
