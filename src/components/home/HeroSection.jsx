import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Globe, Calendar, MapPin } from 'lucide-react';

const stats = [
  { value: '48', label: '参赛球队', icon: Globe },
  { value: '104', label: '场比赛', icon: Calendar },
  { value: '16', label: '举办城市', icon: MapPin },
];

const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
};

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-wc-dark"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-a1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-wc-dark/70 via-wc-dark/50 to-wc-dark" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wc-red/20 rounded-full blur-3xl z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-wc-blue/20 rounded-full blur-3xl z-10 animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Host flags */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-3xl md:text-4xl">🇺🇸</span>
          <span className="text-gray-400 text-lg font-bebas tracking-widest">·</span>
          <span className="text-3xl md:text-4xl">🇨🇦</span>
          <span className="text-gray-400 text-lg font-bebas tracking-widest">·</span>
          <span className="text-3xl md:text-4xl">🇲🇽</span>
        </div>

        <p
          id="hero-subtitle"
          className="font-inter text-wc-gold uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-4"
        >
          FIFA 世界杯 2026™
        </p>

        <h1
          id="hero-title"
          className="font-bebas text-7xl md:text-[10rem] leading-none tracking-wide mb-2"
          style={{
            background: 'linear-gradient(135deg, #C8102E 0%, #FFD700 50%, #003DA5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          WORLD CUP
        </h1>

        <h2 className="font-bebas text-5xl md:text-8xl text-white tracking-widest mb-8">
          USA · CANADA · MEXICO
        </h2>

        <p className="font-inter text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          史上规模最大的世界杯，48支球队，104场精彩对决，横跨三个国家，共同书写足球新篇章。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#schedule"
            className="bg-wc-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,16,46,0.6)] w-full sm:w-auto text-center"
          >
            查看赛程
          </a>
          <a
            href="#teams"
            className="border-2 border-wc-gold text-wc-gold hover:bg-wc-gold hover:text-black font-bold py-4 px-10 rounded-full uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto text-center"
          >
            参赛球队
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Icon className="w-4 h-4 text-wc-gold mr-1" />
              </div>
              <div className="font-bebas text-4xl md:text-5xl text-wc-gold">
                <CountUp target={parseInt(value)} />
              </div>
              <div className="font-inter text-gray-400 text-xs md:text-sm uppercase tracking-widest mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#schedule"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-400 hover:text-wc-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
