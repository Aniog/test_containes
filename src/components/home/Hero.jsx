import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-inter text-xs font-medium tracking-[0.25em] uppercase text-gold mb-6">
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-white leading-[1.05] tracking-wide mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm md:text-base text-white/75 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with quiet confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-gold text-white font-inter text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-goldlight transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center border border-white/50 text-white font-inter text-xs tracking-[0.15em] uppercase px-10 py-4 hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn">
        <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-white/50">Scroll</span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
