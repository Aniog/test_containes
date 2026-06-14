import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl" />
      </div>

      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/5 border border-slate-200 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-600">Premium Industrial Machinery</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Precision Metal
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                Folding Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Industry-leading sheet metal folding machines engineered for exceptional accuracy, durability, and performance. Transform your fabrication process with ARTITECT MACHINERY.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                Request a Quote
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">2 Year Warranty</p>
                  <p className="text-sm text-slate-500">Full Coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">ISO Certified</p>
                  <p className="text-sm text-slate-500">Quality Assured</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">500+ Clients</p>
                  <p className="text-sm text-slate-500">Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl">
                {/* Machine Illustration Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Abstract Machine Shape */}
                  <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
                    <rect x="50" y="100" width="300" height="100" rx="8" fill="#64748B" />
                    <rect x="70" y="80" width="260" height="30" rx="4" fill="#94A3B8" />
                    <rect x="100" y="200" width="40" height="60" rx="4" fill="#475569" />
                    <rect x="260" y="200" width="40" height="60" rx="4" fill="#475569" />
                    <circle cx="120" cy="150" r="25" fill="#D97706" />
                    <circle cx="280" cy="150" r="25" fill="#D97706" />
                    <rect x="140" y="130" width="120" height="40" rx="4" fill="#1E293B" />
                    <line x1="200" y1="130" x2="200" y2="170" stroke="#D97706" strokeWidth="2" />
                    <line x1="140" y1="150" x2="260" y2="150" stroke="#D97706" strokeWidth="2" />
                    {/* Control Panel */}
                    <rect x="180" y="110" width="40" height="15" rx="2" fill="#D97706" />
                    <circle cx="190" cy="117" r="3" fill="#1E293B" />
                    <circle cx="200" cy="117" r="3" fill="#1E293B" />
                    <circle cx="210" cy="117" r="3" fill="#1E293B" />
                  </svg>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <p className="text-sm text-slate-500">Precision Rating</p>
                  <p className="text-2xl font-bold text-slate-900">99.8%</p>
                  <p className="text-xs text-green-600 font-medium">±0.1mm Accuracy</p>
                </div>

                {/* Floating Feature Card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                  <p className="text-sm text-slate-500">Max Sheet Thickness</p>
                  <p className="text-2xl font-bold text-slate-900">6mm</p>
                  <p className="text-xs text-amber-600 font-medium">Steel Grade</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-amber-500/20 rounded-3xl" />
              <div className="absolute -z-20 top-16 -right-16 w-full h-full bg-slate-200/50 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;