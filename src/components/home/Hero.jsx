import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Shield, Wrench, Award } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/80 to-brand-900/70 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Award className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-white/90">
              Precision Engineering Since 1998
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Precision Sheet Metal
            <span className="block text-accent-500">Folding Solutions</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-brand-100 leading-relaxed mb-10 max-w-2xl"
          >
            Advanced double folding machines engineered for industrial precision.
            Trusted by manufacturers worldwide for consistent, high-quality sheet metal fabrication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl group"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              Request Quote
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Shield className="w-6 h-6 text-accent-500" />
              </div>
              <div>
                <p className="text-white font-semibold">ISO Certified</p>
                <p className="text-sm text-brand-200">Quality Assured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Wrench className="w-6 h-6 text-accent-500" />
              </div>
              <div>
                <p className="text-white font-semibold">24/7 Support</p>
                <p className="text-sm text-brand-200">Expert Assistance</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                <Award className="w-6 h-6 text-accent-500" />
              </div>
              <div>
                <p className="text-white font-semibold">25+ Years</p>
                <p className="text-sm text-brand-200">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
