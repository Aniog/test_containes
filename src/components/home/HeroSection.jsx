import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900/80" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
            Find reliable suppliers. Verify factories. Inspect quality. Follow production. Coordinate shipping. We handle the entire sourcing process so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors no-underline inline-flex items-center justify-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-colors no-underline inline-flex items-center justify-center"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
