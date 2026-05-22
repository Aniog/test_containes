import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-end overflow-hidden bg-black">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 overflow-hidden"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
        <p id="hero-subtitle" className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
          The invisible made visible
        </p>
        <h1 id="hero-title" className="font-thin tracking-widest uppercase text-white text-5xl md:text-7xl lg:text-9xl leading-none mb-10">
          Micro<br />universe
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/gallery"
            className="inline-block border border-white text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-center"
          >
            Explore Gallery
          </Link>
          <a
            href="#about"
            className="inline-block border border-neutral-700 text-neutral-400 px-8 py-3 text-xs tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300 text-center"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-neutral-600 animate-pulse" />
        <p className="text-xs tracking-widest uppercase text-neutral-600 rotate-90 origin-center mt-4">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
