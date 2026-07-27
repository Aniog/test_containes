import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-slate-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          data-strk-bg-id="hero-bg-logistics-3f9k2a"
          data-strk-bg="[hero-headline] shipping container port logistics manufacturing"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <h1 id="hero-headline" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl">
            We help overseas businesses find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. Your dedicated on-the-ground partner in China.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg transition-colors"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 text-slate-300">
            <div className="flex items-center">
              <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
              <span>Verified Suppliers</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
              <span>Strict Quality Control</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
              <span>End-to-end Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
