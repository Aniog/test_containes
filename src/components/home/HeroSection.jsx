import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-fanta-light pt-20"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fanta-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fanta-yellow/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fanta-purple/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div>
          <span className="inline-block bg-fanta-orange/10 text-fanta-orange font-poppins font-semibold text-sm rounded-full px-4 py-1 mb-6 uppercase tracking-widest">
            Taste the Fun
          </span>
          <h1
            id="hero-title"
            className="font-poppins font-black text-5xl md:text-7xl text-fanta-dark leading-tight mb-6"
          >
            Life's Better with a
            <span className="text-fanta-orange"> Fanta</span>
          </h1>
          <p
            id="hero-subtitle"
            className="font-poppins text-lg text-gray-600 mb-8 max-w-md leading-relaxed"
          >
            Bursting with real fruit flavors and vibrant energy — Fanta is the
            sparkling soda that turns every moment into a celebration.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#flavors"
              className="bg-fanta-orange text-white font-poppins font-bold rounded-full px-8 py-3 hover:bg-orange-600 transition-all duration-200 hover:scale-105 inline-block"
            >
              Explore Flavors
            </a>
            <a
              href="#story"
              className="border-2 border-fanta-orange text-fanta-orange font-poppins font-bold rounded-full px-8 py-3 hover:bg-fanta-orange hover:text-white transition-all duration-200 hover:scale-105 inline-block"
            >
              Our Story
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <p className="font-poppins font-black text-3xl text-fanta-orange">190+</p>
              <p className="font-poppins text-sm text-gray-500 font-medium">Countries</p>
            </div>
            <div className="w-px bg-orange-200" />
            <div>
              <p className="font-poppins font-black text-3xl text-fanta-orange">100+</p>
              <p className="font-poppins text-sm text-gray-500 font-medium">Flavors</p>
            </div>
            <div className="w-px bg-orange-200" />
            <div>
              <p className="font-poppins font-black text-3xl text-fanta-orange">80+</p>
              <p className="font-poppins text-sm text-gray-500 font-medium">Years of Fun</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-fanta-orange/30 to-fanta-yellow/30 rounded-3xl blur-xl scale-110" />
            <img
              data-strk-img-id="hero-main-img-a1b2c3"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Fanta orange soda with fruit"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-fanta-yellow text-fanta-dark font-poppins font-black text-sm rounded-full w-20 h-20 flex items-center justify-center text-center leading-tight shadow-lg rotate-12">
              NEW<br/>FLAVORS!
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 66.7C120 53.3 240 26.7 360 20C480 13.3 600 26.7 720 33.3C840 40 960 40 1080 36.7C1200 33.3 1320 26.7 1380 23.3L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
