import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-obsidian/60 via-velmora-obsidian/30 to-velmora-obsidian/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-6 animate-fadeIn">
          18K Gold Plated · Hypoallergenic
        </p>
        <h1
          id="hero-headline"
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-velmora-linen leading-[1.05] tracking-wide mb-6"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be<br />
          <em className="italic text-velmora-gold-light">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-inter text-sm md:text-base text-velmora-linen/80 leading-relaxed mb-10 max-w-md mx-auto animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the woman who moves through the world with quiet confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <Link to="/shop">
            <Button variant="primary" size="lg">Shop the Collection</Button>
          </Link>
          <Link to="/#story">
            <Button variant="ghost-light" size="lg">Our Story</Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="font-inter text-[9px] tracking-[0.25em] uppercase text-velmora-linen/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-gold/60 to-transparent" />
      </div>
    </section>
  );
}
