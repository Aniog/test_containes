import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.observe-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: <Award className="w-5 h-5" />, value: '25+', label: 'Years Experience' },
    { icon: <Users className="w-5 h-5" />, value: '500+', label: 'Happy Clients' },
    { icon: <Shield className="w-5 h-5" />, value: '100%', label: 'Quality Assured' },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-[#0D0D1A] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(233,69,96,0.1) 1px, transparent 1px),
            linear-gradient(rgba(233,69,96,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E94560]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#0F3460]/40 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="observe-animate opacity-0">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#E94560]/10 border border-[#E94560]/20 text-[#E94560] text-sm font-medium">
                <span className="w-2 h-2 bg-[#E94560] rounded-full mr-2 animate-pulse" />
                Premium Industrial Equipment
              </span>
            </div>

            <h1 className="observe-animate opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Precision Metal{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94560] to-[#ff6b7f]">
                Folding Solutions
              </span>
            </h1>

            <p className="observe-animate opacity-0 text-lg text-gray-400 leading-relaxed max-w-xl">
              ARTITECT MACHINERY delivers high-performance double folding machines and sheet metal folder equipment engineered for precision, durability, and industrial excellence.
            </p>

            <div className="observe-animate opacity-0 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="group inline-flex items-center px-8 py-4 bg-[#E94560] hover:bg-[#d13a52] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#E94560]/30"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:border-white/40 text-white rounded-lg font-semibold transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="observe-animate opacity-0 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start text-[#E94560] mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative observe-animate opacity-0">
            <div className="relative z-10">
              {/* Machine Illustration */}
              <svg viewBox="0 0 500 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Base */}
                <rect x="50" y="280" width="400" height="60" rx="8" fill="#16213E" stroke="#0F3460" strokeWidth="2"/>
                
                {/* Main Body */}
                <rect x="80" y="140" width="340" height="140" rx="12" fill="#1A1A2E" stroke="#0F3460" strokeWidth="2"/>
                
                {/* Folding Bed */}
                <rect x="100" y="200" width="300" height="20" rx="4" fill="#0F3460"/>
                <rect x="100" y="200" width="300" height="4" rx="2" fill="#E94560"/>
                
                {/* Control Panel */}
                <rect x="340" y="160" width="60" height="100" rx="6" fill="#16213E" stroke="#0F3460" strokeWidth="1"/>
                <circle cx="370" cy="185" r="8" fill="#E94560"/>
                <circle cx="370" cy="210" r="8" fill="#4ADE80"/>
                <circle cx="370" cy="235" r="8" fill="#FBBF24"/>
                <rect x="350" y="248" width="40" height="4" rx="2" fill="#0F3460"/>
                <rect x="350" y="256" width="40" height="4" rx="2" fill="#0F3460"/>
                
                {/* Top Press */}
                <rect x="120" y="100" width="260" height="40" rx="6" fill="#16213E" stroke="#0F3460" strokeWidth="2"/>
                <rect x="140" y="120" width="220" height="8" rx="2" fill="#E94560"/>
                
                {/* Hydraulic Cylinders */}
                <rect x="160" y="60" width="20" height="50" rx="4" fill="#0F3460"/>
                <rect x="320" y="60" width="20" height="50" rx="4" fill="#0F3460"/>
                <circle cx="170" cy="55" r="12" fill="#1A1A2E" stroke="#E94560" strokeWidth="2"/>
                <circle cx="330" cy="55" r="12" fill="#1A1A2E" stroke="#E94560" strokeWidth="2"/>
                
                {/* Side Guides */}
                <rect x="60" y="180" width="20" height="120" rx="4" fill="#16213E" stroke="#0F3460" strokeWidth="1"/>
                <rect x="420" y="180" width="20" height="120" rx="4" fill="#16213E" stroke="#0F3460" strokeWidth="1"/>
                
                {/* Decorative Lines */}
                <line x1="50" y1="350" x2="50" y2="200" stroke="#E94560" strokeWidth="3"/>
                <line x1="450" y1="350" x2="450" y2="200" stroke="#E94560" strokeWidth="3"/>
                
                {/* Measurement Marks */}
                <g stroke="#E94560" strokeWidth="1" opacity="0.6">
                  <line x1="60" y1="200" x2="60" y2="210"/>
                  <line x1="60" y1="240" x2="60" y2="250"/>
                  <line x1="60" y1="280" x2="60" y2="290"/>
                </g>
                
                {/* Glow Effect */}
                <rect x="100" y="200" width="300" height="20" rx="4" fill="#E94560" opacity="0.3" filter="url(#glow)"/>
                
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 animate-float">
              <div className="text-[#E94560] text-2xl font-bold">99.9%</div>
              <div className="text-white/70 text-sm">Precision</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 animate-float-delayed">
              <div className="text-[#4ADE80] text-2xl font-bold">ISO</div>
              <div className="text-white/70 text-sm">Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent" />
    </section>
  );
};

export default Hero;
