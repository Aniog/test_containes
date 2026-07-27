import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 id="hero-title" className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              China Sourcing Agent for <span className="text-blue-600">Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-600 sm:text-xl">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your dedicated team on the ground in China.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/services"
                className="mt-3 sm:mt-0 flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-semibold rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-colors"
              >
                Our Services
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Factory Audit</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>QC Inspection</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Shipping Support</span>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden">
              <img
                data-strk-img-id="hero-img-china-factory-123"
                data-strk-img="[hero-subtitle] [hero-title] China sourcing agent factory inspection"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="w-full h-auto object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Working with Chinese manufacturers"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
