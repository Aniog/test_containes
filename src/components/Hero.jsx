import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={containerRef}>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/60 via-dark/50 to-dark/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-accent font-semibold tracking-widest uppercase text-sm md:text-base mb-4"
        >
          Artisan Bakery & Wood-Fired Pizza
        </p>
        <h1
          id="hero-title"
          className="font-serif font-bold text-5xl md:text-7xl text-white leading-tight mb-6"
        >
          Baked with Love,<br />
          <span className="text-accent italic">Fired with Passion</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Fresh artisan breads, pastries, and authentic wood-fired pizzas crafted daily from the finest ingredients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-primary text-white rounded-full px-8 py-4 font-semibold text-base hover:bg-primary-dark transition-colors duration-200 shadow-lg"
          >
            Explore Our Menu
          </a>
          <a
            href="#about"
            className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold text-base hover:bg-white hover:text-dark transition-colors duration-200"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
