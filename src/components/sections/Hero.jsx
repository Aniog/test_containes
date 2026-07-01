import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-forno-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-eyebrow"
          className="font-inter text-sm uppercase tracking-widest text-wheat mb-4"
        >
          Wood-Fired Artisan
        </p>
        <h1
          id="hero-title"
          className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          Pizza & Bakery
          <br />
          <span className="text-ember">Made with Love</span>
        </h1>
        <p
          id="hero-subtitle"
          className="font-inter text-lg md:text-xl text-wheat/90 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Handcrafted doughs, seasonal ingredients, and a wood-fired oven that
          has been burning since 1987.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-ember text-white rounded-full px-8 py-3 font-semibold font-inter hover:bg-red-700 transition-colors"
          >
            Explore Our Menu
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white rounded-full px-8 py-3 font-semibold font-inter hover:bg-white hover:text-charcoal transition-colors"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="font-inter text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
