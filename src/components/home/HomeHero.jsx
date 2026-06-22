import React from 'react';

const HomeHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-microcosmos"
        data-strk-bg="[hero-subtitle] [hero-title] microscopic universe"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/40 via-[#0a192f]/60 to-[#112240]" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold text-[#e6f1ff] mb-6 tracking-tight"
        >
          The Unseen <span className="text-[#64ffda]">MicroCosmos</span>
        </h1>
        <p 
          id="hero-subtitle"
          className="text-xl md:text-2xl text-gray-300 mb-10 font-light"
        >
          Journey into the majestic beauty of life at the smallest scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#gallery" 
            className="px-8 py-3 bg-[#64ffda] text-[#0a192f] rounded-lg font-bold hover:bg-[#64ffda]/80 transition-all text-center"
          >
            Explore the Void
          </a>
          <a 
            href="#exhibitions" 
            className="px-8 py-3 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-bold hover:bg-[#64ffda]/10 transition-all text-center"
          >
            View Exhibitions
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
