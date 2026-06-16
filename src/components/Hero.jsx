import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h2
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Precision Sheet Metal Folding Machines
          </h2>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-xl md:text-2xl text-blue-400 font-semibold mb-4"
          >
            Engineered for Excellence
          </p>

          {/* Description */}
          <p
            id="hero-description"
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Discover our premium range of sheet metal folding machines designed for
            professionals who demand precision, durability, and superior performance.
            From double folding machines to advanced metal folders, we deliver
            engineering excellence in every machine.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-400">7+</p>
              <p className="text-sm text-gray-400 mt-1">Product Models</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-400">100%</p>
              <p className="text-sm text-gray-400 mt-1">Quality Guaranteed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-400">24/7</p>
              <p className="text-sm text-gray-400 mt-1">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-75" />
      </div>
    </section>
  );
};

export default Hero;
