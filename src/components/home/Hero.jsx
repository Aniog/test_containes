import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center pt-20" ref={containerRef}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30 w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white flex flex-col items-center">
        <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-md">
          Crafted to be Treasured
        </h1>
        <p id="hero-subhead" className="text-lg md:text-xl font-light mb-10 max-w-2xl text-white/90 drop-shadow-sm">
          Demi-fine jewelry designed for the modern muse. Bring a touch of quiet luxury to your every day.
        </p>
        <Button asChild size="lg" className="uppercase tracking-[0.2em] font-medium min-w-[200px] h-14 bg-primary text-primary-foreground hover:bg-primary/90 border-none">
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  );
}