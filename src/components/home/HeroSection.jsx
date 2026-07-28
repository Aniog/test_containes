import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-navy-800 overflow-hidden">
      {/* Background image via data-strk-bg */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        data-strk-bg-id="hero-bg-main-9a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy-800/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-700/20 border border-teal-600/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300 font-medium">Trusted by 200+ Buyers Worldwide</span>
            </div>
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-700 hover:bg-teal-600 text-white font-semibold rounded-md transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-500 text-slate-200 hover:border-teal-500 hover:text-teal-300 font-semibold rounded-md transition-colors"
              >
                See How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span className="text-sm text-slate-300">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span className="text-sm text-slate-300">On-site QC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span className="text-sm text-slate-300">Full Transparency</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              data-strk-img-id="hero-img-main-8f2a9c"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="China sourcing agent at work"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
