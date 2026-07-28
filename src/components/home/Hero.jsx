import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 bg-gray-900"
        data-strk-bg-id="hero-bg-ssourcing"
        data-strk-bg="[hero-title] [hero-subtitle] China factory manufacturing sourcing agent"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-2/3">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for <span className="text-secondary">Global Buyers</span>
          </h1>
          <p id="hero-subtitle" className="text-xl text-gray-200 mb-8 max-w-2xl">
            We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China. Your one-stop sourcing partner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-secondary hover:bg-secondary-dark text-white rounded-lg font-bold text-lg flex items-center justify-center transition-all shadow-lg"
            >
              Get a Free Sourcing Quote <ArrowRight className="ml-2" />
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold text-lg border border-white/30 backdrop-blur-sm transition-all"
            >
              Our Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white text-sm">
            <div className="flex items-center">
              <ShieldCheck className="text-secondary mr-2" size={24} />
              <span>Verified Factories</span>
            </div>
            <div className="flex items-center">
              <Globe className="text-secondary mr-2" size={24} />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <Truck className="text-secondary mr-2" size={24} />
              <span>Direct Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
