import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10"
        />
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-7f3a1c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-site pt-20 pb-10">
        <div className="max-w-xl">
          <p id="hero-subtitle" className="hidden">gold jewelry on model warm lighting</p>
          <h1 id="hero-title" className="hidden">Crafted to be Treasured Velmora Fine Jewelry</h1>
          <h1 className="heading-xl text-white mb-6 animate-slide-up">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-sans font-light leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Demi-fine gold jewelry designed for the modern woman. <br className="hidden md:block" />
            Pieces that live with you, layer with you, and shine with you — every day.
          </p>
          <Link
            to="/shop"
            className="btn-primary animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
