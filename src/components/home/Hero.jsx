import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/60 via-[#050a0f]/40 to-[#050a0f]" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center pt-24">
        <span className="inline-block text-[#00d4c8] text-sm font-medium tracking-widest uppercase mb-6 border border-[#00d4c8]/30 px-4 py-1.5 rounded-full bg-[#00d4c8]/5">
          A World Beyond the Naked Eye
        </span>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#e2f0f9] leading-tight mb-6"
        >
          The Hidden{' '}
          <span className="bg-gradient-to-r from-[#00d4c8] to-violet-400 bg-clip-text text-transparent">
            MicroCosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-[#7fa8c4] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Dive into the breathtaking universe of microscopic life — bacteria, fungi, cells, and
          creatures invisible to the human eye, yet essential to all life on Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center justify-center bg-[#00d4c8] text-[#050a0f] font-semibold px-8 py-3.5 rounded-full hover:bg-[#00b8ad] transition-colors duration-200 text-base"
          >
            Explore the Gallery
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center border border-[#00d4c8]/50 text-[#00d4c8] font-semibold px-8 py-3.5 rounded-full hover:bg-[#00d4c8]/10 transition-colors duration-200 text-base"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#4a7a9b] hover:text-[#00d4c8] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
