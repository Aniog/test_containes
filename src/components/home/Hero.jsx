import React, { useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center" ref={containerRef}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          data-strk-bg-id="hero-bg-6d34fa"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32 md:py-48">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 fade-in">
            <span className="w-2 h-2 bg-copper rounded-full mr-2"></span>
            Premium Sheet Metal Machinery
          </div>

          {/* Main Heading */}
          <h1 
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Precision in Every
            <span className="text-copper"> Fold</span>
          </h1>

          {/* Subtitle */}
          <p 
            id="hero-subtitle"
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed slide-in-left"
          >
            ARTITECT MACHINERY delivers industry-leading sheet metal folding solutions. 
            Engineered for precision, built for durability, designed for efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 slide-in-right">
            <a
              href="#products"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-deep-navy inline-flex items-center justify-center"
            >
              Request Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white border-opacity-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-copper mb-2">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-copper mb-2">500+</div>
              <div className="text-sm text-gray-300">Machines Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-copper mb-2">50+</div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#products" className="text-white hover:text-copper transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
