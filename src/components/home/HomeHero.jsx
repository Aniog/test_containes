import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

const COUNTER_DURATION = 2000;

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / COUNTER_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => requestAnimationFrame(tick), 400);
    return () => clearTimeout(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function HomeHero() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-space-black">
      {/* Constellation canvas */}
      <ConstellationCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(13,21,48,0.3) 0%, rgba(5,8,16,0.7) 70%)' }}
      />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-nebula-blue/60" />
          <span className="text-nebula-blue text-sm font-medium tracking-[0.3em] uppercase font-inter">
            Global Memory Initiative
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-nebula-blue/60" />
        </div>

        {/* Main title */}
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block">Every Memory</span>
          <span className="block bg-gradient-to-r from-nebula-blue via-aurora-teal to-cosmic-violet bg-clip-text text-transparent">
            A Star
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-inter leading-relaxed">
          Before humanity crosses the stars, we preserve what made us human.
          Millions of memories — joys, losses, discoveries, and loves — archived
          for eternity.
        </p>

        <p className="text-slate-500 text-sm md:text-base mb-10 font-inter">
          The Great Migration begins in <span className="text-stardust-gold font-semibold">2051</span>. 
          Your story deserves to travel with us.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-4 bg-nebula-blue hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-nebula-blue/30 hover:shadow-xl hover:-translate-y-0.5 font-inter"
          >
            Explore Memories
          </button>
          <button
            onClick={() => navigate('/submit')}
            className="px-8 py-4 border border-nebula-blue/50 text-nebula-blue hover:bg-nebula-blue/10 font-semibold rounded-lg transition-all duration-300 font-inter"
          >
            Submit Your Memory
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {[
            { value: STATS.totalMemories, label: 'Memories', suffix: '' },
            { value: STATS.contributors, label: 'Contributors', suffix: '' },
            { value: STATS.languages, label: 'Languages', suffix: '' },
            { value: STATS.countries, label: 'Countries', suffix: '' },
            { value: STATS.yearsSpanned, label: 'Years Spanned', suffix: '+' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-space-navy/60 backdrop-blur-sm border border-slate-800 rounded-xl p-4 text-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-xl md:text-2xl font-bold text-white font-cinzel">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-500 text-xs mt-1 font-inter">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase font-inter">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
