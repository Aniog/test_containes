import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, CheckCircle, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToQuote = () => {
    const el = document.getElementById('inquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative bg-slate-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main-a3c5d7"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/80" />

      <div className="relative container mx-auto pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-primary-300 text-sm font-medium">Trusted by 500+ Buyers in 40+ Countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-accent-400">Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={scrollToQuote}
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-md text-base inline-flex items-center justify-center gap-2 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="/how-it-works"
                className="border border-slate-500 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md text-base inline-flex items-center justify-center transition-colors"
              >
                See How It Works
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-400" />
                <span className="text-slate-300 text-sm">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-slate-300 text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-400" />
                <span className="text-slate-300 text-sm">Fast Turnaround</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <img
                data-strk-img-id="hero-img-factory-e8f2a1"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-5 max-w-[220px]">
                <p className="text-slate-800 font-bold text-2xl">500+</p>
                <p className="text-slate-500 text-sm">Successful sourcing projects completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;