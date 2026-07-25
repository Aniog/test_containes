import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToContent = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-aw7f3k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="text-white font-bold text-xl tracking-wide">Animal World</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
          <a href="#categories" className="hover:text-amber-400 transition-colors">Categories</a>
          <a href="#featured" className="hover:text-amber-400 transition-colors">Featured</a>
          <a href="#facts" className="hover:text-amber-400 transition-colors">Fun Facts</a>
          <a href="#conservation" className="hover:text-amber-400 transition-colors">Conservation</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 pb-24">
        <span className="inline-block bg-amber-500/90 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Explore the Wild
        </span>
        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Animal World
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-2xl text-white/85 max-w-2xl leading-relaxed mb-10">
          Discover the breathtaking diversity of life on Earth — from the depths of the ocean to the peaks of the highest mountains.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToContent}
            className="bg-[#1a5c38] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#0f3d25] transition-colors text-base shadow-lg"
          >
            Start Exploring
          </button>
          <a
            href="#conservation"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#1a5c38] transition-colors text-base"
          >
            Save Wildlife
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="relative z-20 mx-auto mb-8 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
