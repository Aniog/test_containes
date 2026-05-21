import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-bg/70 via-cosmos-bg/50 to-cosmos-bg" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmos-accent/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cosmos-violet/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 md:px-8">
        <p className="text-cosmos-accent text-xs md:text-sm uppercase tracking-widest font-semibold mb-4 font-grotesk">
          Explore the Invisible
        </p>
        <h1
          id="hero-title"
          className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl text-cosmos-text leading-tight mb-6"
        >
          Micro<span className="text-cosmos-accent">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-cosmos-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the hidden universe beneath our feet — where microscopic organisms, cells, and structures reveal the extraordinary complexity of life at its smallest scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-cosmos-accent text-cosmos-bg font-grotesk font-semibold px-8 py-3 rounded-full hover:bg-cosmos-accent/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,229,200,0.3)]"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-cosmos-border text-cosmos-text font-grotesk font-medium px-8 py-3 rounded-full hover:border-cosmos-accent/50 hover:text-cosmos-accent transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cosmos-dim">
        <span className="text-xs uppercase tracking-widest font-grotesk">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-dim to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
