import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Background Image using generic stock images */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-992a3b"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }} // Fallback while system replaces
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Precision Engineering for<br/>
          <span className="text-blue-400">Sheet Metal Folding</span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
          Artitect Machinery delivers industry-leading double folding machines that combine elegant design with unmatched durability and user-friendly operation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors flex items-center justify-center gap-2 group">
            Explore Machines
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-md font-medium text-lg transition-colors">
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;