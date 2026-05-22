import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-brown">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark-brown/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-warm-orange text-xs tracking-widest uppercase font-semibold mb-4"
        >
          Authentic Italian Craft
        </p>
        <h1
          id="hero-title"
          className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Pizza Made with <br />
          <span className="italic text-warm-orange">Passion</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Wood-fired Neapolitan pizza crafted from generations-old recipes,
          the finest Italian ingredients, and a whole lot of love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-pizza-red text-white px-8 py-3 rounded-full font-semibold hover:bg-deep-red transition text-base"
          >
            Explore Our Menu
          </a>
          <a
            href="#story"
            className="border-2 border-cream text-cream px-8 py-3 rounded-full font-semibold hover:bg-cream hover:text-dark-brown transition text-base"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
