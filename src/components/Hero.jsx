import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-60"
        data-strk-bg-id="microcosmos-hero-bg"
        data-strk-bg="[hero-title] [hero-desc] microbes microscopic hidden world"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-0" />
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 
          id="hero-title"
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-10 duration-1000"
        >
          Invisible <span className="text-teal-400 italic">Realms</span>
        </h1>
        <p 
          id="hero-desc"
          className="text-lg md:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200"
        >
          Embark on a visual journey into the microscopic universe. Discover the breathtaking beauty of life hidden in plain sight.
        </p>
        <button className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          Enter the Cosmos
        </button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-teal-400 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
