import React from 'react';
import { ChevronRight, Award, Clock, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-slate-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              Premium Industrial Machinery
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Precision Sheet Metal{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Folding Machines
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Experience unmatched precision and durability with our advanced double folding machines. 
              Engineered for excellence, built to last, and designed for the modern metalworking industry.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, '#products')}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-slate-800/25 group"
              >
                Explore Products
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 transition-all"
              >
                Request Quote
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Trusted by leading manufacturers worldwide</p>
              <div className="flex flex-wrap gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
              {/* Machine Illustration */}
              <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Abstract machine representation */}
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6 border border-amber-400/30">
                    <svg className="w-24 h-24 text-amber-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="10" y="60" width="80" height="30" rx="2" />
                      <rect x="20" y="20" width="60" height="40" rx="2" />
                      <line x1="10" y1="75" x2="10" y2="90" />
                      <line x1="90" y1="75" x2="90" y2="90" />
                      <rect x="15" y="25" width="20" height="10" rx="1" />
                      <rect x="65" y="25" width="20" height="10" rx="1" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Premium Series</h3>
                  <p className="text-slate-400">Double Folding Machine</p>
                </div>
              </div>

              {/* Feature badges */}
              <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                New Model
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900">ISO Certified</div>
                  <div className="text-sm text-slate-500">Quality Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;