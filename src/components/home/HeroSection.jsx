import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown, Cog } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-7a3b9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brand/80 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 text-center py-24">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Cog className="w-5 h-5 text-accent" />
          <span className="text-accent text-sm font-medium uppercase tracking-[0.15em]">
            Industrial Excellence Since 1998
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-white text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tight mb-6"
        >
          Precision Metal Folding
          <br />
          <span className="text-accent">Solutions</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Industry-leading double folding machines, sheet metal folders, and metal folding equipment engineered for accuracy, durability, and performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center bg-accent text-brand px-8 py-3.5 rounded font-semibold uppercase tracking-[0.05em] hover:bg-accent-hover transition-all hover:scale-[1.02]"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border-2 border-white/40 text-white px-8 py-3.5 rounded font-semibold uppercase tracking-[0.05em] hover:bg-white hover:text-brand transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#products"
            className="text-white/60 hover:text-accent transition-colors animate-bounce"
            aria-label="Scroll to products"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
