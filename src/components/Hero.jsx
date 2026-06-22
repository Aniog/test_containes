import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-micro-1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          The Invisible Universe
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Embark on a journey through the MicroCosmos. Discover the breathtaking beauty of biology, nature, and chemistry at microscopic scales.
        </p>
        <a 
          href="#cellular" 
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
};

export default Hero;
