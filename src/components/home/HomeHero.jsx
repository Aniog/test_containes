import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden" ref={containerRef}>
      <div 
        className="absolute inset-0 z-0 bg-secondary bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="editorial woman wearing gold jewelry portrait"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
        <p className="uppercase tracking-widest text-sm md:text-base mb-6 font-medium text-white/90">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight drop-shadow-sm text-white">
          Crafted to be Treasured
        </h1>
        
        <Link 
          to="/shop"
          className="inline-block bg-accent text-accent-foreground px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-colors duration-300 shadow-sm"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-0 w-full bg-background/95 backdrop-blur-md border-t border-border/50 py-4 z-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-foreground gap-4 text-center">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Free Worldwide Shipping</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> 30-Day Returns</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> 18K Gold Plated</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Hypoallergenic</span>
        </div>
      </div>
    </section>
  );
}