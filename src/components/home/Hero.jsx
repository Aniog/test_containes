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
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#3D2B1F]/50 via-[#3D2B1F]/30 to-[#3D2B1F]/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-[#F5F0E8] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light"
        >
          温暖每一个家的角落
        </p>
        <h1
          id="hero-title"
          className="font-serif-sc font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          罗克岚家居
          <br />
          <span className="text-[#D4B896]">让生活更美好</span>
        </h1>
        <p className="text-[#F5F0E8]/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          精选天然材质，融合东方美学与现代设计，为您的家带来温馨、舒适与品质感。
          每一件产品，都是我们对美好生活的诚意之作。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-[#8B6F47] text-white font-medium px-8 py-3 rounded-full hover:bg-[#5C3D1E] transition-colors duration-200 text-base"
          >
            探索产品系列
          </a>
          <a
            href="#story"
            className="border-2 border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-[#5C3D1E] transition-colors duration-200 text-base"
          >
            了解品牌故事
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="text-white/70" size={32} />
      </div>
    </section>
  );
}
