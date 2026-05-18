import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-warm-bg pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-warm-bg/95 via-warm-bg/80 to-warm-bg/30" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-xl">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            匠心厨具 · 温暖每个家
          </span>
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-brand-brown leading-tight mb-4">
            让每一顿饭<br />都充满爱的味道
          </h1>
          <p id="hero-subtitle" className="text-lg text-text-sub leading-relaxed mb-8">
            金利厨具，专注家庭厨房用品二十余年。从锅碗瓢盆到刀具砧板，
            每一件产品都经过严格品质把关，只为让您在厨房里感受到家的温暖与幸福。
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#products')}
              className="bg-brand-orange text-white rounded-full px-8 py-3 font-semibold hover:bg-orange-600 transition shadow-md"
            >
              探索产品系列
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="border-2 border-brand-orange text-brand-orange rounded-full px-8 py-3 font-semibold hover:bg-brand-orange hover:text-white transition"
            >
              了解我们
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { num: '20+', label: '年匠心经验' },
              { num: '500+', label: '款精选产品' },
              { num: '100万+', label: '家庭信赖之选' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-brand-orange">{s.num}</p>
                <p className="text-sm text-text-sub mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
