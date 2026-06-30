import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-800/20 to-midnight" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/70 via-transparent to-midnight/30" />
        {/* Warm light accent */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-warm-400/15 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative h-full container-page flex flex-col justify-center">
        <div className="max-w-[640px]">
          <p className="text-white/50 text-xs tracking-widest uppercase mb-6">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.08] font-medium mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-[460px] mb-10 font-light">
            Heirloom-quality demi-fine jewelry in 18K gold plate. Designed for the modern woman who values quiet luxury.
          </p>
          <Link to="/shop" className="btn-primary group">
            Shop the Collection
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
