import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Sparkles, Zap, Brain } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('what-is-ai');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ai-dark"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ai-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai-indigo/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="hero-bg-ai-main-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ai-indigo/40 bg-ai-indigo/10 text-ai-cyan text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>The Future is Intelligent</span>
        </div>

        {/* Main heading */}
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Artificial
          </span>
          <br />
          <span className="text-slate-100">Intelligence</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Machines that think, learn, and create — reshaping every industry,
          every profession, and every aspect of human life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToNext}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:scale-105"
          >
            Explore AI
          </button>
          <button
            onClick={() => document.getElementById('ai-applications')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full border border-indigo-500/50 text-indigo-300 hover:border-indigo-400 hover:text-indigo-200 font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-indigo-500/10"
          >
            See Applications
          </button>
        </div>

        {/* Floating stat pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: Brain, label: 'Neural Networks', value: '1B+ Parameters' },
            { icon: Zap, label: 'Processing Speed', value: 'Petaflops' },
            { icon: Sparkles, label: 'AI Models', value: '10,000+' },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-ai-card/80 border border-indigo-500/20 backdrop-blur-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-ai-cyan" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-widest">{label}</p>
                <p className="text-sm font-semibold text-slate-200">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
