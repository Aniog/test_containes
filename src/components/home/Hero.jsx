import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-navy"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/50 text-gold text-xs tracking-widest uppercase px-4 py-2 rounded mb-8">
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          专业 · 诚信 · 卓越
        </div>

        <h1
          id="hero-title"
          className="font-serif font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          守护您的权益
          <br />
          <span className="text-gold">专业法律服务</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          明远律师事务所拥有20余年执业经验，专注于商事诉讼、公司法务、知识产权及刑事辩护领域，
          为企业和个人提供全方位的专业法律解决方案。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold text-white px-10 py-4 font-semibold rounded hover:bg-gold-light transition-colors text-base"
          >
            免费法律咨询
          </button>
          <button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-10 py-4 font-semibold rounded hover:bg-white hover:text-navy transition-colors text-base"
          >
            了解我们的服务
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-12">
          {[
            { num: '20+', label: '年执业经验' },
            { num: '5000+', label: '成功案例' },
            { num: '98%', label: '客户满意度' },
            { num: '50+', label: '专业律师' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif font-bold text-gold text-3xl md:text-4xl">{stat.num}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
