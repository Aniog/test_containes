import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 scale-105"
      >
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto">
        <h1
          id="hero-title"
          className="text-5xl md:text-8xl font-serif mb-6 leading-tight drop-shadow-sm"
        >
          Crafted to be <br /> Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl font-light mb-10 tracking-widest opacity-90 uppercase"
        >
          Demi-fine gold jewelry for every moment
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-black px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#D4AF37] hover:text-white transition-all duration-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <div className="w-[1px] h-12 bg-white" />
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
EOF > /workspace/my-app/src/components/home/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 scale-105"
      >
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto">
        <h1
          id="hero-title"
          className="text-5xl md:text-8xl font-serif mb-6 leading-tight drop-shadow-sm"
        >
          Crafted to be <br /> Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl font-light mb-10 tracking-widest opacity-90 uppercase"
        >
          Demi-fine gold jewelry for every moment
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-black px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#D4AF37] hover:text-white transition-all duration-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <div className="w-[1px] h-12 bg-white" />
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
