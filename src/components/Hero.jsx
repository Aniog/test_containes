import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" className="relative bg-slate-900 text-white min-h-[600px] flex items-center" ref={containerRef}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        data-strk-bg-id="hero-bg-artitect-1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          <span id="hero-tag" className="inline-block py-1 px-3 rounded-full bg-blue-900/50 text-blue-200 text-sm font-semibold tracking-wider mb-6 border border-blue-700/50">
            PRECISION ENGINEERING
          </span>
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Advanced Sheet Metal Folding Solutions
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            ARTITECT MACHINERY specializes in industrial-grade double folding machines. Built for durability, accuracy, and ease of use in modern metalworking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-medium text-lg transition-colors">
              Explore Machines
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-8 py-3.5 rounded-md font-medium text-lg transition-colors">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
