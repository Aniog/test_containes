import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Search, CheckCircle, Truck } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Image loading would be triggered here if ImageHelper was available
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </div>
            
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-blue-400">Global Buyers</span>
            </h1>
            
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, 
              follow production, and coordinate shipping from China.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors text-lg"
              >
                See How It Works
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: Search, label: 'Supplier Sourcing' },
                { icon: Shield, label: 'Factory Verification' },
                { icon: CheckCircle, label: 'Quality Inspection' },
                { icon: Truck, label: 'Shipping Support' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                alt="Factory inspection in China"
                className="rounded-2xl shadow-2xl w-full"
                data-strk-img-id="hero-img-d4e5f6"
                data-strk-img="[hero-title] [hero-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-blue-700">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
