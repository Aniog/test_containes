import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Globe, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-slate-900"
        data-strk-bg-id="hero-bg-ssourcing"
        data-strk-bg="[hero-title] [hero-subtitle] shipping port factory inventory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1 mb-6 animate-in fade-in slide-in-from-left duration-700">
            <span className="text-accent text-xs font-bold uppercase tracking-wider">Trusted Sourcing Partner</span>
          </div>
          
          <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-in fade-in slide-in-from-left duration-1000">
            China Sourcing Agent for <span className="text-accent underline decoration-4 underline-offset-8">Global Buyers</span>
          </h1>
          
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light animate-in fade-in slide-in-from-left duration-1000 delay-200">
            Reliable on-the-ground support to find verified suppliers, manage quality control, and coordinate international shipping. Scale your business with secure China sourcing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Link to="/contact" className="btn-accent text-lg flex items-center justify-center group">
              Get a Free Sourcing Quote <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/how-it-works" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-md font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
              Our Process
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 animate-in fade-in duration-1000 delay-700">
            <div className="flex items-center space-x-2 text-white/80">
              <ShieldCheck className="text-accent" size={24} />
              <span className="text-sm font-medium">Verified Factories</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Clock className="text-accent" size={24} />
              <span className="text-sm font-medium">72h Inquiry Response</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Globe className="text-accent" size={24} />
              <span className="text-sm font-medium">Global Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
