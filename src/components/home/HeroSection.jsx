import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-primary-dark/90 via-brand-primary/75 to-brand-primary/40" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <span className="inline-block bg-brand-accent/20 text-brand-accent-light text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand-accent/30">
            专注家庭护理 · 品质生活首选
          </span>
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            守护每一个<br />
            <span className="text-brand-accent-light">家庭的健康</span>
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
            威尔德家庭护理产品有限公司，深耕家庭护理领域二十余年，以科学配方与严苛品控，为千万家庭提供安全、高效、温和的护理解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-accent-light transition-colors text-base shadow-lg"
            >
              探索产品系列
            </button>
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base"
            >
              了解我们
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '20+', label: '年行业经验' },
              { value: '500+', label: '产品品类' },
              { value: '1000万+', label: '家庭信赖' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-accent-light">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="向下滚动"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
