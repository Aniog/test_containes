import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-warm-gray via-white to-warm-gray overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2744' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-safety-orange/10 text-safety-orange px-4 py-2 rounded-full">
              <CheckCircle size={16} className="mr-2" />
              <span className="text-sm font-semibold">ISO 9001 Certified Manufacturer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Precision Sheet Metal
              <span className="text-industrial-navy block">Folding Solutions</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Engineering excellence in every fold. Our double folding machines deliver unmatched precision, 
              durability, and efficiency for industrial sheet metal processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center bg-safety-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-industrial-navy border-2 border-industrial-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-industrial-navy hover:text-white transition-all"
              >
                <Play size={20} className="mr-2" />
                Request Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-industrial-navy">25+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-industrial-navy">500+</div>
                <div className="text-sm text-gray-600 mt-1">Machines Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-industrial-navy">50+</div>
                <div className="text-sm text-gray-600 mt-1">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-machine-main-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title] [section-subtitle] [section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY - Precision Sheet Metal Folding Machine"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/20 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold text-charcoal">Industry Leading</span>
              </div>
              <p className="text-2xl font-bold text-industrial-navy">99.8%</p>
              <p className="text-sm text-gray-600">Precision Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
