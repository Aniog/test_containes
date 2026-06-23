import React from 'react';

const HomeHero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-white/10">
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        data-strk-bg-id="hero-bg-microcosmos"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg"
        >
          MicroCosmos
        </h1>
        <p 
          id="hero-subtitle"
          className="text-xl md:text-3xl font-light text-blue-200 drop-shadow max-w-2xl mx-auto"
        >
          Explore the unseen, magnificent universe hidden within a drop of water.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;