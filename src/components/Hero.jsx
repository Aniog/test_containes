import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with stock image tagging */}
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-background-9a2c1e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-50 mb-6 tracking-tight animate-fade-in"
        >
          MicroCosmos
        </h1>
        <p 
          id="hero-subtitle"
          className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          Embark on a journey into the intricate and breathtaking hidden universe of the microscopic world.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#organisms"
            className="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-500 transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/20"
          >
            Start Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 bg-slate-800/80 text-slate-100 border border-slate-700 rounded-full font-medium hover:bg-slate-700 transition-all backdrop-blur-sm"
          >
            View Gallery
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-sm font-medium uppercase tracking-widest animate-bounce">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
