import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Settings, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full opacity-10 bg-cover bg-center"
          data-strk-bg-id="hero-bg-928"
          data-strk-bg="[hero-title] [hero-subtitle] industrial folding machine factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-slate-900/5 px-3 py-1 rounded-full text-slate-900 text-xs font-bold tracking-widest uppercase">
              <Settings className="w-3 h-3" />
              Next-Gen Sheet Metal Solutions
            </div>
            
            <h1 id="hero-title" className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Precision Engineering For <span className="text-slate-500">Modern Architecture.</span>
            </h1>
            
            <p id="hero-subtitle" className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Experience the future of sheet metal folding. Our double folding machines combine extreme precision with user-friendly automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                Request a Demo
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <p className="text-2xl font-black text-slate-900">15+</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">500+</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Installations</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">24/7</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Expert Support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100">
               <img
                  data-strk-img-id="hero-main-img"
                  data-strk-img="[hero-title] sheet metal folding machine precision bending"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Industrial Machinery"
               />
            </div>
            
            {/* Floating feature card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] hidden lg:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <p className="font-bold text-slate-900 text-sm">Industrial Grade Durability</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">Built with heavy-duty steel to withstand 24/7 production environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
