import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Wrench, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744]/95 via-[#1a2744]/80 to-[#1a2744]/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e85d04]/20 border border-[#e85d04]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e85d04] rounded-full animate-pulse" />
            <span className="text-[#e85d04] text-sm font-medium">Precision Engineering Since 1995</span>
          </div>

          {/* Main Heading */}
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Precision Sheet Metal
            <span className="block text-[#e85d04]">Folding Solutions</span>
          </h1>

          {/* Subtitle */}
          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Advanced double folding machines engineered for industrial excellence. 
            Transform your metal fabrication process with ARTITECT MACHINERY's 
            innovative sheet metal folding technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-[#e85d04] hover:bg-[#d35400] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Request Quote
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Wrench className="w-6 h-6 text-[#e85d04]" />
              </div>
              <div>
                <p className="text-white font-semibold">Precision Built</p>
                <p className="text-gray-400 text-sm">±0.1mm accuracy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Zap className="w-6 h-6 text-[#e85d04]" />
              </div>
              <div>
                <p className="text-white font-semibold">High Speed</p>
                <p className="text-gray-400 text-sm">Up to 30 cycles/min</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <Shield className="w-6 h-6 text-[#e85d04]" />
              </div>
              <div>
                <p className="text-white font-semibold">5 Year Warranty</p>
                <p className="text-gray-400 text-sm">Full support included</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
