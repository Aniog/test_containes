import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { resolveStrkImgUrl } from '@/lib/utils';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const url = resolveStrkImgUrl('hero-bg-velmora');
    if (url && bgRef.current) {
      bgRef.current.style.backgroundImage = `url('${url}')`;
    }
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-warm-800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-warm-800/60 via-warm-800/40 to-warm-800/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-light mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wider uppercase leading-tight mb-6 animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-white/70 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          18K gold plated jewelry designed for the modern woman. Hypoallergenic,
          timeless, and crafted with intention.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-sans text-xs tracking-widest uppercase py-4 px-10 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
        >
          Shop the Collection
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-[10px] tracking-widest uppercase font-sans">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
