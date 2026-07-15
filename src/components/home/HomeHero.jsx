import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HomeHero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-secondary"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subtitle] [hero-title] jewelry lifestyle model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 id="hero-title" className="text-white text-5xl md:text-7xl font-serif leading-tight mb-6">
          Crafted to be <br className="hidden md:block" /> Treasured
        </h1>
        <p id="hero-subtitle" className="text-white/90 text-sm md:text-base uppercase tracking-widestest font-medium mb-10 max-w-xl mx-auto">
          Quiet luxury for the modern woman. <br className="hidden md:block" /> Explore our collection of demi-fine jewelry.
        </p>
        <Link to="/shop">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 h-14 uppercase tracking-widestest text-xs font-bold transition-all duration-300 transform hover:scale-105"
          >
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Trust Bar - Thin strip under hero or as part of hero bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/10 backdrop-blur-md py-4 border-t border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-widestest text-white/80 font-bold">
          <div>Free Worldwide Shipping</div>
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <div>30-Day Returns</div>
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <div>18K Gold Plated</div>
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <div>Hypoallergenic</div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
