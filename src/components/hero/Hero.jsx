import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Shield, Cog, Award } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-navy to-[#0F1A32] overflow-hidden"
    >
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 opacity-20"
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Cog className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-medium text-white/80">Precision Metal Folding Solutions</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Industrial-Grade{' '}
            <span className="text-brand-gold">Metal Folding</span>{' '}
            Machinery
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
          >
            From double folding machines to precision sheet metal folders — ARTITECT delivers robust, reliable equipment trusted by manufacturers worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-brand-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/20 transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
            {[
              { icon: Shield, label: 'Industrial Grade', desc: 'Built to last' },
              { icon: Cog, label: 'Precision Engineering', desc: 'German standards' },
              { icon: Award, label: '10+ Years', desc: 'Industry experience' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <item.icon className="w-5 h-5 text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}