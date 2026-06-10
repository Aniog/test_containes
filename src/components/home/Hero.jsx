import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      style={{ background: 'linear-gradient(to bottom right, #111827, #1e3a8a, #111827)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-blue-800 bg-opacity-30 rounded-full text-blue-200 text-sm font-medium mb-8 border border-blue-700 border-opacity-50">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          Precision Engineering Since 1995
        </div>

        {/* Main Heading */}
        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Precision in Every
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Fold
          </span>
        </h1>

        {/* Subtitle */}
        <p id="hero-subtitle" className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Industry-leading sheet metal folding machines engineered for accuracy,
          durability, and superior performance in every project.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#products"
            className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            Explore Our Machines
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-200"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white border-opacity-20">
          <div>
            <div className="text-4xl font-bold text-white mb-1">25+</div>
            <div className="text-sm text-blue-200">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">5000+</div>
            <div className="text-sm text-blue-200">Machines Sold</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-sm text-blue-200">Countries Served</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
