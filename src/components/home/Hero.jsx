import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import Button from '@/components/ui/Button';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-001"
        data-strk-bg="gold jewelry elegant woman fashion"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/40 via-velmora-black/20 to-velmora-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-velmora-cream">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-velmora-cream/90 max-w-xl mx-auto animate-fade-in delay-100">
          Premium demi-fine jewelry that elevates every moment. 
          Discover pieces designed for the modern woman.
        </p>
        <div className="mt-10 animate-fade-in delay-200">
          <Link to="/shop">
            <Button size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-velmora-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-velmora-cream/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}