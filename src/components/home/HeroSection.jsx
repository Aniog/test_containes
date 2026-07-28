import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-brand-orange" />
            <span className="text-white/90 text-sm font-medium">Trusted by 500+ Global Buyers</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can buy with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition text-base"
            >
              See How It Works
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-green" />
              No upfront fees
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-green" />
              Factory-verified suppliers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-green" />
              End-to-end support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
