import React from 'react';
import { ArrowRight, Award, Shield } from 'lucide-react';

const Hero = ({ onQuoteClick }) => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 bg-slate-950 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title] industrial machinery factory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-white/90 tracking-wide">Trusted by 500+ manufacturers worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 
            id="hero-title"
            className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[0.92] mb-6"
          >
            Precision.<br />Power.<br />Perfection.
          </h1>

          {/* Subheadline */}
          <p 
            id="hero-subtitle"
            className="max-w-2xl text-xl md:text-2xl text-white/70 font-light tracking-tight mb-10"
          >
            World-class sheet metal folding machines engineered for accuracy, 
            durability, and effortless operation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onQuoteClick}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 text-base font-semibold rounded-xl hover:bg-white/90 active:scale-[0.985] transition-all"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white text-base font-medium rounded-xl hover:bg-white/5 active:scale-[0.985] transition-all"
            >
              Explore Our Machines
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-14 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">ISO 9001:2015 Certified</span>
            </div>
            <div className="text-sm text-white/60 font-medium tracking-wide">25+ Years of Excellence</div>
            <div className="text-sm text-white/60 font-medium tracking-wide">Global Service Network</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-[3px] font-medium">SCROLL TO EXPLORE</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
