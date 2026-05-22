import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[70px] md:min-w-[90px] text-center glow-gold">
        <span className="text-3xl md:text-5xl font-black text-amber-400 tabular-nums">
          {String(value ?? 0).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-slate-400 mt-2 font-medium">{label}</span>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const timeLeft = useCountdown('2026-06-11T18:00:00Z');

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-wc2026-a1b2"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0e1a]/70 via-[#0a0e1a]/50 to-[#0a0e1a]" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-amber-400 text-sm font-semibold tracking-wide">FIFA 世界杯 2026™</span>
        </div>

        {/* Main heading */}
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none"
        >
          <span className="bg-gradient-to-r from-red-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
            美加墨
          </span>
          <br />
          <span className="text-white">世界杯 2026</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-slate-300 mb-4 font-light max-w-2xl mx-auto"
        >
          史上最大规模世界杯 · 48支球队 · 三国联合举办
        </p>

        <p className="text-slate-400 text-base mb-10">
          2026年6月11日 — 7月19日 &nbsp;|&nbsp; 美国 · 加拿大 · 墨西哥
        </p>

        {/* Countdown */}
        <div className="mb-10">
          <p className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-widest">距开幕倒计时</p>
          <div className="flex items-start justify-center gap-3 md:gap-6">
            <CountdownUnit value={timeLeft.days} label="天" />
            <span className="text-amber-400 text-3xl md:text-5xl font-black mt-3">:</span>
            <CountdownUnit value={timeLeft.hours} label="时" />
            <span className="text-amber-400 text-3xl md:text-5xl font-black mt-3">:</span>
            <CountdownUnit value={timeLeft.minutes} label="分" />
            <span className="text-amber-400 text-3xl md:text-5xl font-black mt-3">:</span>
            <CountdownUnit value={timeLeft.seconds} label="秒" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="bg-gradient-to-r from-red-500 to-amber-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition text-base"
          >
            了解更多
          </a>
          <a
            href="#schedule"
            className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition text-base font-medium"
          >
            查看赛程
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs">向下滚动</span>
        <div className="w-5 h-8 border-2 border-slate-500 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
