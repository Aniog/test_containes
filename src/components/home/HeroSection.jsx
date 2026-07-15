import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    // Trigger entrance animation after a brief delay
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-dark/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <p
          id="hero-subtitle"
          className={`text-velmora-dark-text/80 text-sm md:text-base tracking-widest uppercase mb-4 font-sans transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-velmora-dark-text mb-6 leading-tight transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          className={`text-velmora-dark-text/80 text-base md:text-lg mb-8 max-w-xl mx-auto font-light transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className={`inline-block bg-velmora-accent text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-velmora-accent-hover transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-px h-12 bg-velmora-dark-text/50 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
