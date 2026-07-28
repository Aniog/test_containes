import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Clock, Globe } from 'lucide-react';

const Hero = ({ 
  title = "China Sourcing Agent for Global Buyers",
  subtitle = "We help international businesses find reliable suppliers, verify factories, inspect quality, and manage shipping from China.",
  ctaText = "Get a Free Sourcing Quote",
  ctaLink = "/contact",
  secondaryCta = "Learn How It Works",
  secondaryLink = "/how-it-works",
  showTrust = true,
  isHomepage = false
}) => {
  return (
    <section className={`relative ${isHomepage ? 'min-h-screen' : 'pt-32 pb-20'} bg-primary overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          {isHomepage && (
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Globe size={16} className="text-accent" />
              <span className="text-white/90 text-sm font-medium">Trusted by buyers from 30+ countries</span>
            </div>
          )}
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to={ctaLink}
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              {ctaText}
              <ChevronRight size={20} className="ml-2" />
            </Link>
            {secondaryCta && (
              <Link
                to={secondaryLink}
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              >
                {secondaryCta}
              </Link>
            )}
          </div>
          
          {/* Trust Indicators */}
          {showTrust && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Shield, stat: "500+", label: "Factories Verified" },
                { icon: Globe, stat: "30+", label: "Countries Served" },
                { icon: Clock, stat: "12+", label: "Years Experience" },
                { icon: Shield, stat: "98%", label: "Client Satisfaction" },
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <item.icon size={24} className="text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{item.stat}</div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
