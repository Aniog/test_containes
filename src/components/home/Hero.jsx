import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/translations';

export default function Hero() {
  const containerRef = useRef(null);
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const isChinese = lang === 'zh';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-nx7k2p"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-space-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-700/20 rounded-full blur-3xl animate-pulse-slow z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl animate-pulse-slow z-10" style={{ animationDelay: '2s' }} />

      <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 mb-8">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className={`text-xs font-semibold text-gold tracking-[0.2em] uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}>
            {t.badge}
          </span>
        </div>

        <h1
          id="hero-title"
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-mist leading-tight mb-6"
          style={{ textShadow: '0 0 60px rgba(22,163,74,0.4)' }}
        >
          {isChinese ? (
            <>
              <span className="font-noto">{t.heading1}</span>
              <br />
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent font-noto">
                {t.heading2}
              </span>
            </>
          ) : (
            <>
              {t.heading1}
              <br />
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                {t.heading2}
              </span>
            </>
          )}
        </h1>

        <p
          id="hero-subtitle"
          className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed ${isChinese ? 'font-noto' : 'font-inter'}`}
        >
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#destinations"
            className={`text-sm font-semibold px-10 py-4 rounded-full bg-gradient-to-r from-green-700 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:shadow-[0_0_50px_rgba(22,163,74,0.7)] tracking-widest w-full sm:w-auto ${isChinese ? 'font-noto' : 'font-cinzel'}`}
          >
            {t.cta1}
          </a>
          <a
            href="#book"
            className={`text-sm font-semibold px-10 py-4 rounded-full border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 tracking-widest w-full sm:w-auto ${isChinese ? 'font-noto' : 'font-cinzel'}`}
          >
            {t.cta2}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel text-3xl md:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className={`text-xs text-gray-400 tracking-wider uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className={`text-xs text-gray-500 tracking-widest uppercase ${isChinese ? 'font-noto' : 'font-inter'}`}>{t.scroll}</span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </div>
    </section>
  );
}
