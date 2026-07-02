import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image using strk-bg */}
      <div 
        className="absolute inset-0 z-0 bg-neutral-900"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay for text contrast */}
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto mt-16">
        <p id="hero-subtitle" className="uppercase tracking-[0.2em] text-sm font-medium mb-6 text-white/90">
          Premium Demi-Fine Jewelry
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl mb-8 leading-tight drop-shadow-sm font-serif">
          Crafted to be Treasured
        </h1>
        <Link 
          to="/collections/all" 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-foreground transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
