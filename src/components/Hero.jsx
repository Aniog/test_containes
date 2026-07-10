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
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00d4c8] mb-6 px-4 py-1.5 rounded-full border border-[#00d4c8]/30 bg-[#00d4c8]/10">
          Explore the Invisible World
        </span>
        <h1 id="hero-title" className="text-6xl md:text-8xl font-black tracking-tight text-[#f0f6ff] mb-6 leading-none">
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-[#8ba3c7] max-w-2xl mx-auto mb-10 leading-relaxed">
          A breathtaking journey into the microscopic universe — where single cells become galaxies and life reveals its most extraordinary secrets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="bg-[#00d4c8] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-[#00b8ad] transition-colors text-base"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="border border-[#00d4c8] text-[#00d4c8] px-8 py-4 rounded-full hover:bg-[#00d4c8]/10 transition-colors text-base"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#4a6080]">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#4a6080] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
