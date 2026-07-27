import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-arch-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest-dark/80 via-forest-dark/60 to-forest-dark/90" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
          <span className="text-gold text-sm font-medium tracking-widest uppercase">精准 · 专注 · 力量</span>
        </div>

        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-text-light leading-tight mb-6">
          箭道
          <span className="block text-gold mt-2">射箭运动</span>
        </h1>

        <p id="hero-subtitle" className="text-text-light/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          探索射箭运动的精髓——从古老的战场艺术到现代奥运竞技，感受每一支箭飞向靶心的专注与力量
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="bg-gold hover:bg-gold-light text-forest-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 text-base"
          >
            探索射箭世界
          </Link>
          <Link
            to="/training"
            className="border-2 border-gold/60 text-gold hover:bg-gold hover:text-forest-dark px-8 py-4 rounded-full transition-all duration-300 text-base font-semibold"
          >
            开始训练
          </Link>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-text-light/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
