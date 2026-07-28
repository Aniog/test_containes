import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Truck, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-wide relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              Trusted by 500+ Global Buyers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all with one trusted partner in China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4 justify-center">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="btn-outline border-white/30 text-white hover:bg-white hover:text-brand-800 text-lg px-8 py-4 justify-center">
                How It Works
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: CheckCircle, text: 'Verified Suppliers' },
                { icon: Shield, text: 'Quality Guaranteed' },
                { icon: Truck, text: 'Door-to-Door Shipping' },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80">
                  <badge.icon className="w-5 h-5 text-accent-400" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-600 to-brand-500 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Search className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold">Factory Inspection</p>
                  <p className="text-sm opacity-70">On-site quality verification</p>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Verified Factories</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-brand-500">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
