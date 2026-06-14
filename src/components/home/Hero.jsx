import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F8FAFC] to-white overflow-hidden">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E67E22]/10 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#E67E22]" />
              <span className="text-sm font-medium text-[#E67E22]">Trusted by 500+ Global Buyers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#1E3A5F]">China Sourcing Agent</span>
              <br />
              <span className="text-[#E67E22]">for Global Buyers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B7280] mb-8 leading-relaxed max-w-xl">
              Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all with one trusted partner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#E67E22]/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#1E3A5F] hover:text-white transition-all duration-200"
              >
                How It Works
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#059669]" />
                <span className="text-sm font-medium text-[#1F2937]">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#059669]" />
                <span className="text-sm font-medium text-[#1F2937]">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#E67E22]" />
                <span className="text-sm font-medium text-[#1F2937]">98% Satisfaction</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-up animate-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }} />
                </div>
                <div className="text-center p-8 text-white">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="10" y="50" width="30" height="40" rx="2" />
                    <rect x="15" y="20" width="20" height="30" rx="2" />
                    <rect x="50" y="60" width="40" height="30" rx="2" />
                    <circle cx="75" cy="25" r="15" opacity="0.6" />
                    <path d="M20 90 L20 85 M50 90 L50 85 M80 90 L80 85" strokeWidth="3" />
                    <path d="M5 90 L95 90" strokeWidth="2" />
                  </svg>
                  <p className="text-lg font-semibold opacity-80">Factory Operations</p>
                  <p className="text-sm opacity-60 mt-2">Manufacturing Excellence</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
              <div className="text-3xl font-bold text-[#1E3A5F] mb-1">15+</div>
              <div className="text-sm text-[#6B7280]">Years of Experience</div>
            </div>
            
            {/* Floating Reviews Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#E67E22] fill-[#E67E22]" />
                ))}
              </div>
              <div className="text-sm text-[#6B7280]">500+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E67E22]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E3A5F]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Hero;