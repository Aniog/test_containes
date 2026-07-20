import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/Button';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-charcoal/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-6">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant font-light text-5xl md:text-7xl text-ivory leading-tight mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm md:text-base text-ivory/70 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who wears her story. 18K gold plated, hypoallergenic, made to last.
            </p>
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn">
        <span className="font-inter text-xs tracking-widest uppercase text-ivory/40">Scroll</span>
        <div className="w-px h-8 bg-ivory/20" />
      </div>
    </section>
  );
}
