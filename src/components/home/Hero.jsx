import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.15)]">
        <span className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#FFD700] leading-none">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-gray-400 text-xs uppercase tracking-widest mt-2">{label}</span>
    </div>
  );
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

export default function Hero() {
  const countdown = useCountdown('2026-06-11T00:00:00');
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0E1A]"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0d1530] to-[#0A0E1A]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C8102E]/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#003DA5]/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFD700]/5 blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Host flags */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-3xl sm:text-4xl" title="USA">🇺🇸</span>
          <div className="w-px h-8 bg-gray-600" />
          <span className="text-3xl sm:text-4xl" title="Canada">🇨🇦</span>
          <div className="w-px h-8 bg-gray-600" />
          <span className="text-3xl sm:text-4xl" title="Mexico">🇲🇽</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full px-4 py-1.5 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
          <span className="text-[#FFD700] text-xs font-bold uppercase tracking-widest">FIFA World Cup 2026™</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-['Bebas_Neue'] text-6xl sm:text-8xl lg:text-[10rem] leading-none tracking-wide mb-4">
          <span className="bg-gradient-to-r from-[#C8102E] via-[#FFD700] to-[#003DA5] bg-clip-text text-transparent">
            世界杯
          </span>
          <br />
          <span className="text-white">2026</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          美国 · 加拿大 · 墨西哥联合举办，48支球队，104场比赛，史上最大规模世界杯
        </p>

        <p className="text-[#FFD700] font-semibold text-sm uppercase tracking-widest mb-10">
          2026年6月11日 — 7月19日
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12">
          <CountdownUnit value={countdown.days} label="天" />
          <span className="font-['Bebas_Neue'] text-3xl text-[#FFD700] mb-4">:</span>
          <CountdownUnit value={countdown.hours} label="时" />
          <span className="font-['Bebas_Neue'] text-3xl text-[#FFD700] mb-4">:</span>
          <CountdownUnit value={countdown.minutes} label="分" />
          <span className="font-['Bebas_Neue'] text-3xl text-[#FFD700] mb-4">:</span>
          <CountdownUnit value={countdown.seconds} label="秒" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#schedule"
            className="bg-[#C8102E] hover:bg-red-700 text-white font-bold py-3 px-10 rounded-full uppercase tracking-widest transition-all duration-200 shadow-[0_0_20px_rgba(200,16,46,0.4)] hover:shadow-[0_0_30px_rgba(200,16,46,0.6)] text-sm"
          >
            查看赛程
          </a>
          <a
            href="#teams"
            className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-bold py-3 px-10 rounded-full uppercase tracking-widest transition-all duration-200 text-sm"
          >
            参赛球队
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#FFD700] transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
