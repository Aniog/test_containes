import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-deep-space/60 via-deep-space/40 to-deep-space" />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 md:px-8">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-teal-glow/10 border border-teal-glow/30 text-teal-glow text-sm font-medium tracking-widest uppercase">
          The Invisible Universe
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-soft-white mb-6 leading-tight"
        >
          Welcome to<br />
          <span className="text-teal-glow">MicroCosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-muted-blue max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the breathtaking world invisible to the naked eye — where bacteria dance, crystals bloom, and life pulses in extraordinary forms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-3.5 rounded-full bg-teal-glow text-deep-space font-bold text-base hover:bg-teal-glow/90 transition-all shadow-[0_0_30px_rgba(0,212,200,0.4)]"
          >
            Explore Gallery
          </a>
          <a
            href="#worlds"
            className="px-8 py-3.5 rounded-full border border-white/20 text-soft-white font-medium text-base hover:border-teal-glow/50 hover:text-teal-glow transition-all"
          >
            Discover Worlds
          </a>
        </div>
      </div>

      <a
        href="#gallery"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-muted-blue hover:text-teal-glow transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
