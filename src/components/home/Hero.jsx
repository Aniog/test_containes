import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToFeatures = () => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#3d2314]/50 via-[#3d2314]/30 to-[#3d2314]/60" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-[#e8d5b7] text-sm lg:text-base font-medium tracking-[0.3em] uppercase mb-6"
        >
          天然木材 · 匠心工艺
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#fefcf8] leading-tight mb-6"
        >
          让木语诉说
          <br />
          <span className="text-[#c49a6c]">家的温度</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-[#e8d5b7] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          每一件家具，都是一段关于自然与工艺的故事。
          精选优质原木，手工打磨，为您的家带来永恒的温暖与质感。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#c49a6c] text-[#3d2314] rounded-full px-8 py-3.5 font-semibold text-base hover:bg-[#e8d5b7] transition-all duration-200 shadow-lg"
          >
            探索产品
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-[#fefcf8] text-[#fefcf8] rounded-full px-8 py-3.5 font-semibold text-base hover:bg-[#fefcf8]/10 transition-all duration-200"
          >
            了解我们
          </button>
        </div>
      </div>

      <button
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#e8d5b7] animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
