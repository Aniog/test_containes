import React from 'react';
import { ArrowRight, Shield, Zap, Settings, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.2) 0%, transparent 50%)'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Industry Leading Quality</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Precision Sheet Metal
              <span className="text-blue-400"> Folding</span>
              <br />Machinery
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Engineered for excellence. Our double folding machines deliver unmatched precision 
              and reliability for all your sheet metal fabrication needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Request Quote
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700">
              <div>
                <p className="text-3xl font-bold text-blue-400">25+</p>
                <p className="text-sm text-slate-400 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">500+</p>
                <p className="text-sm text-slate-400 mt-1">Machines Sold</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">99%</p>
                <p className="text-sm text-slate-400 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <Settings className="w-24 h-24 text-blue-500 mx-auto mb-4 animate-spin-slow" />
                  <p className="text-slate-400 text-lg">Double Folding Machine</p>
                  <p className="text-slate-500 text-sm mt-2">Precision Engineering</p>
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">High Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
