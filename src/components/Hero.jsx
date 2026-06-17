import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToMachines = () => {
    const element = document.querySelector('#machines');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center pt-20 bg-brand-dark overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title] precision metal folding workshop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur text-white/80 text-xs tracking-[3px] mb-6">
          EST. 2008 • PRECISION SINCE DAY ONE
        </div>

        <h1 id="hero-title" className="font-serif text-6xl md:text-7xl lg:text-8xl text-white tracking-[-2.5px] leading-[0.92] mb-6">
          Precision.<br />Crafted.
        </h1>

        <p id="hero-subtitle" className="max-w-2xl mx-auto text-xl md:text-2xl text-white/80 mb-10 tracking-tight">
          World-class double folding machines and sheet metal folders engineered for workshops that refuse to compromise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToMachines}
            className="btn btn-gold text-base px-10 py-3.5"
          >
            Explore Our Machines
          </button>
          <button
            onClick={scrollToContact}
            className="btn btn-outline border-white text-white hover:bg-white hover:text-brand-dark text-base px-10 py-3.5"
          >
            Request a Quote
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => {
              const el = document.querySelector('#about');
              if (el) {
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementPosition = el.getBoundingClientRect().top;
                window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
              }
            }}
            className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors"
            aria-label="Scroll to learn more"
          >
            <span className="text-xs tracking-[2px] mb-2">SCROLL TO BEGIN</span>
            <div className="w-px h-8 bg-white/30" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;