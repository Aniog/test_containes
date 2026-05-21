import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-8 py-32">
        <span className="inline-block bg-teal-400/10 text-teal-400 border border-teal-400/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
          Explore the Invisible World
        </span>
        <h1 id="hero-title" className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none">
          Micro<span className="text-teal-400">Cosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A breathtaking journey into the microscopic universe — where single cells dance, bacteria thrive, and the invisible becomes extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#explore" className="bg-teal-400 text-gray-950 font-bold px-8 py-4 rounded-full hover:bg-teal-300 transition text-base">
            Begin Exploring
          </a>
          <a href="#gallery" className="border border-teal-400/40 text-teal-400 font-semibold px-8 py-4 rounded-full hover:bg-teal-400/10 transition text-base">
            View Gallery
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-teal-400 to-transparent" />
      </div>
    </section>
  );
}
