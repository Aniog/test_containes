import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with B&W Micrograph Background */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Micrograph - Radiolarian/Diatom */}
        <div className="absolute inset-0 bg-[#1A1A1A]">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=2000&q=80"
            alt="Radiolarian micrograph - intricate silica skeleton structure"
            className="w-full h-full object-cover micrograph opacity-90"
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Centered Glassmorphism Title Card */}
        <div className="relative z-10 px-6 max-w-4xl text-center">
          <div className="glass-card p-12 md:p-16">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/20 border border-white/30">
                <Microscope className="w-5 h-5" />
                <span className="text-sm font-medium tracking-[3px] uppercase">Est. 1897</span>
              </div>
            </div>

            <h1 className="text-white mb-6 tracking-tight">
              MicroCosmos
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-serif">
              The Microscopic World
            </p>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              An archival exploration of cellular architecture, protist morphology, 
              and the hidden geometries of life at the limits of perception.
            </p>

            <Link to="/specimens">
              <button className="cta-button group">
                Start Observation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-[2px] uppercase">Scroll to Explore</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-text-charcoal leading-relaxed">
            Since the earliest days of microscopy, scientists have sought to catalogue 
            the invisible architecture of living matter. This digital archive preserves 
            their observations—each specimen a testament to the extraordinary complexity 
            contained within the smallest scales of existence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;