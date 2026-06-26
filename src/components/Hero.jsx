import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-brand-dark/60 z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-1"
        data-strk-bg="industrial sheet metal folding machine industrial interior engineering"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
            Engineering the <span className="text-brand-gold italic">Future</span> of Folding
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-brand-light/90 mb-10 max-w-2xl font-light tracking-wide">
            Precision-engineered double folding machines and sheet metal folders for architectural excellence. Artitect Machinery delivers the elegance of design meets heavy-duty performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products"
              className="group bg-brand-gold text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-gold/90 transition-all"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all text-center"
            >
              Contact Specialist
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-2 border-brand-gold pl-4">
              <div className="text-white text-3xl font-bold font-serif">15+</div>
              <div className="text-brand-light/60 text-xs uppercase tracking-widest mt-1">Years Experience</div>
            </div>
            <div className="border-l-2 border-brand-gold pl-4">
              <div className="text-white text-3xl font-bold font-serif">500+</div>
              <div className="text-brand-light/60 text-xs uppercase tracking-widest mt-1">Global Installations</div>
            </div>
            <div className="border-l-2 border-brand-gold pl-4">
              <div className="text-white text-3xl font-bold font-serif">0.1mm</div>
              <div className="text-brand-light/60 text-xs uppercase tracking-widest mt-1">Precision Folding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
