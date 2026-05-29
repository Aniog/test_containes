import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a2e]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/70 to-[#1a1a2e]/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <span className="inline-block text-[#e94560] text-sm font-semibold uppercase tracking-widest mb-4">
            Ride Without Limits
          </span>
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-6"
          >
            Built for the<br />
            <span className="text-[#e94560]">Bold</span> Rider
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Premium mountain and road bikes engineered for performance, crafted for adventure. Find your perfect ride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#bikes"
              className="inline-flex items-center justify-center gap-2 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Explore Bikes <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e] font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
