import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Button from '@/components/ui/Button';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-section-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-[var(--color-text-primary)] mb-6 leading-tight"
          >
            Crafted to be Treasured
          </h1>
          
          <p 
            id="hero-subtitle"
            className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto"
          >
            Fine demi-fine jewelry for the moments that matter. 18K gold plated, hypoallergenic, and designed to last.
          </p>
          
          <Link to="/collection">
            <Button variant="primary" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-text-muted)] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--color-text-muted)] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
