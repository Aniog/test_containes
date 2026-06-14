import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@/lib/imageHelper';
import { ArrowRight, Shield, Wrench, Award } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-slate-900"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Precision Sheet Metal
            <span className="block text-blue-400">Folding Solutions</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
          >
            Engineering excellence in double folding machines. Trusted by manufacturers worldwide for precision, reliability, and innovation in metal fabrication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Request Quote
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold">ISO Certified</p>
                <p className="text-sm text-slate-400">Quality Assured</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Wrench className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold">20+ Years</p>
                <p className="text-sm text-slate-400">Industry Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold">Global Reach</p>
                <p className="text-sm text-slate-400">50+ Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
