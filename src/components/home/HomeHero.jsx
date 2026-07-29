import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-900"
    >
      {/* Background with stock image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        data-strk-bg-id="home-hero-bg-agent-123"
        data-strk-bg="[hero-subtitle] [hero-title] China Factory Export Shipping"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 
            id="hero-title"
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p 
            id="hero-subtitle"
            className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed"
          >
            Your boots on the ground in China. We help you find direct factories, verify suppliers, inspect quality, and manage shipping with ZERO headaches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              to="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-1"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 px-8 py-4 rounded-lg font-bold text-lg text-center transition-all"
            >
              Explore Our Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Verified Direct Factories",
              "100% Quality Assurance",
              "End-to-End Logistics"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-100 font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual element */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 mr-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3">
        <img 
          data-strk-img-id="hero-side-img-99"
          data-strk-img="China warehouse logistics factory production"
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          alt="Sourcing Operations"
          className="w-full h-full object-cover"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
    </section>
  );
};

export default HomeHero;
