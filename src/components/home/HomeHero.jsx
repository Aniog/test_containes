import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image using the tag system */}
      <div 
        className="absolute inset-0 z-0 bg-secondary"
        data-strk-bg-id="home-hero-bg-1a2b3c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <h1 
          id="hero-headline" 
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-background mb-6 font-light tracking-wide leading-tight drop-shadow-sm"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subhead" 
          className="text-lg md:text-xl text-background/90 mb-10 max-w-2xl mx-auto font-light tracking-wide"
        >
          Discover demi-fine gold jewelry designed for everyday elegance.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif tracking-widest uppercase text-sm rounded-none h-14 px-10 transition-all hover:shadow-lg">
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  );
}