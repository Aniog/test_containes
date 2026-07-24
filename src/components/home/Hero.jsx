import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image using the tagging system */}
      <div 
        className="absolute inset-0 z-0 bg-black/20"
        data-strk-bg-id="hero-bg-98f2a1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}
      >
        <div className="absolute inset-0 bg-black/30 w-full h-full mix-blend-multiply"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <h1 
          id="hero-headline" 
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight tracking-tight drop-shadow-md"
        >
          Crafted to be <br/><span className="italic">Treasured</span>
        </h1>
        
        <p 
          id="hero-subhead" 
          className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto drop-shadow-sm text-white/90"
        >
          Premium demi-fine jewelry designed for the modern muse. 
          Discover pieces that elevate your everyday.
        </p>
        
        <Button 
          asChild 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-10 py-6 text-sm uppercase tracking-widest font-medium transition-all"
        >
          <Link to="/collections/all">
            Shop the Collection
          </Link>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/70">
        <span className="text-xs uppercase tracking-widest mb-2 font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
};

export default Hero;
