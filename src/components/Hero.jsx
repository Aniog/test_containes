import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-slate-900 text-white min-h-[80vh] flex items-center pt-20">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        data-strk-bg-id="hero-bg-artitect"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-800 text-amber-400 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
            Precision Engineering Redefined
          </div>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Sheet Metal</span> Folding Machinery
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Elevate your manufacturing with ARTITECT's elegant, reliable, and user-friendly double folding machines. Built for speed, precision, and longevity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Explore Our Machines
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-800 border-2 border-slate-700 text-white px-8 py-4 rounded-md font-semibold transition-all">
              Request a Consultation
              <ChevronRight className="w-5 h-5 text-amber-500" />
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800/60">
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">15+</div>
              <div className="text-sm text-slate-400 font-medium">Years Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-1">0.1<span className="text-xl">mm</span></div>
              <div className="text-sm text-slate-400 font-medium">Folding Precision</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-amber-400 mb-1">Global</div>
              <div className="text-sm text-slate-400 font-medium">Service Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;