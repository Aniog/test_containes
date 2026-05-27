import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-sky-700 to-cyan-500"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
            fill="#f0f9ff"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-cyan-400/20 text-cyan-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-cyan-400/30">
          Premium Swimming Equipment
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Gear Up for the <span className="text-cyan-300">Water</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Professional swimming equipment for every level — from beginners to elite athletes.
          Dive in with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-white text-sky-700 hover:bg-cyan-50 rounded-full px-8 py-3.5 font-semibold text-base transition shadow-lg"
          >
            Explore Products
          </a>
          <a
            href="#features"
            className="border-2 border-white text-white hover:bg-white hover:text-sky-700 rounded-full px-8 py-3.5 font-semibold text-base transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
