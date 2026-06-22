import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background with dynamic image interpolation */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        data-strk-bg-id="hero-bg-micro-1"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
          Explore the <span className="text-primary">MicroCosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Journey into the invisible universe around us. Discover the breathtaking beauty of cells, bacteria, and microscopic lifeforms that shape our world.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#gallery" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Start Exploring
          </a>
          <a href="#discoveries" className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/20">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;