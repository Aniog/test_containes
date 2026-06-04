import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc002"
        data-strk-bg="world under the microscope microscopic organisms cells bacteria"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/70 via-[#050a0f]/50 to-[#050a0f]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block text-xs font-medium uppercase tracking-widest text-[#00d4ff] mb-6 border border-[rgba(0,212,255,0.3)] px-4 py-1.5 rounded-full">
          Explore the Invisible World
        </span>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-[#e2f0fb] mb-6 leading-none"
          style={{ textShadow: '0 0 60px rgba(0,212,255,0.4)' }}
        >
          Micro<span className="text-[#00d4ff]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#7fb3cc] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the hidden universe beneath our eyes — where bacteria, cells, and crystals reveal nature's most extraordinary designs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 bg-[#00d4ff] text-[#050a0f] font-bold rounded-full hover:bg-[#00b8e0] transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-[rgba(0,212,255,0.4)] text-[#00d4ff] font-bold rounded-full hover:bg-[rgba(0,212,255,0.1)] transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#4a7a96]">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#4a7a96] to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
