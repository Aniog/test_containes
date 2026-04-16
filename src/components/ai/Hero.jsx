import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Zap } from 'lucide-react';

const DOTS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: (Math.random() * 4 + 2).toFixed(1),
  delay: (Math.random() * 4).toFixed(1),
}));

const LINES = [
  { x1: 20, y1: 30, x2: 40, y2: 50 },
  { x1: 40, y1: 50, x2: 60, y2: 35 },
  { x1: 60, y1: 35, x2: 80, y2: 55 },
  { x1: 25, y1: 70, x2: 45, y2: 55 },
  { x1: 45, y1: 55, x2: 65, y2: 70 },
  { x1: 65, y1: 70, x2: 75, y2: 45 },
];

export default function Hero() {
  const scrollToNext = () => {
    const el = document.querySelector('#what-is-ai');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          {LINES.map((l, i) => (
            <line
              key={i}
              x1={`${l.x1}%`} y1={`${l.y1}%`}
              x2={`${l.x2}%`} y2={`${l.y2}%`}
              stroke="url(#lineGrad)"
              strokeWidth="0.15"
              strokeOpacity="0.6"
            />
          ))}
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {DOTS.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full neural-dot"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              background: dot.id % 3 === 0 ? '#6366f1' : dot.id % 3 === 1 ? '#06b6d4' : '#a855f7',
              '--duration': `${dot.duration}s`,
              '--delay': `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          The Intelligence Revolution
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          The Age of{' '}
          <span className="gradient-text">Artificial</span>
          <br />
          <span className="gradient-text">Intelligence</span>
        </h1>

        {/* Subheading */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Discover how AI is reshaping our world — from machine learning breakthroughs
          to autonomous systems that think, learn, and create.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <button
            onClick={scrollToNext}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-xl shadow-indigo-500/30 flex items-center gap-2 border-none cursor-pointer"
          >
            <Zap className="w-5 h-5" />
            Start Exploring
          </button>
          <button
            onClick={() => document.querySelector('#timeline')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full border border-white/15 text-slate-300 font-semibold text-base hover:border-indigo-500/50 hover:text-white transition-all duration-200 bg-white/5 cursor-pointer"
          >
            View Timeline
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          {[
            { value: '70+', label: 'Years of AI' },
            { value: '$500B', label: 'Market Size' },
            { value: '97%', label: 'Accuracy Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-indigo-400 transition-colors animate-float bg-transparent border-none cursor-pointer"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
