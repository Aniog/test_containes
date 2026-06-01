import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

function formatNumber(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return n.toString();
}

function AnimatedCounter({ target, duration = 2000 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{formatNumber(value)}</span>;
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-space-black">
      {/* Constellation background */}
      <ConstellationCanvas />

      {/* Nebula overlay */}
      <div className="absolute inset-0 bg-nebula-gradient pointer-events-none" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,8,16,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-space-indigo/60 backdrop-blur-sm border border-nebula-blue/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-aurora-teal animate-pulse" />
          <span className="text-xs text-aurora-teal font-medium tracking-widest uppercase">
            Global Memory Initiative · Est. 2031
          </span>
        </div>

        {/* Title */}
        <h1 className="font-cinzel font-bold text-white leading-tight mb-6">
          <span className="block text-4xl md:text-6xl lg:text-7xl">Before We Leave</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #4f8ef7 0%, #a78bfa 50%, #2dd4bf 100%)' }}>
            the Earth Behind
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Every human life is a universe of moments. We are preserving them all —
          so that when humanity reaches the stars, it carries its soul.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/explore"
            className="inline-flex items-center justify-center gap-2 bg-nebula-blue hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-nebula-blue/30 hover:shadow-nebula-blue/50 hover:scale-105"
          >
            <span>Explore Memories</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            to="/submit"
            className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <span>Contribute a Memory</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Memories', value: STATS.totalMemories },
            { label: 'Countries', value: STATS.countries },
            { label: 'Languages', value: STATS.languages },
            { label: 'Years Spanned', value: STATS.yearsSpanned },
            { label: 'Contributors', value: STATS.contributors },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-space-navy/60 backdrop-blur-sm border border-slate-700/40 rounded-xl p-3 text-center"
            >
              <div className="text-xl md:text-2xl font-bold text-white font-cinzel">
                <AnimatedCounter target={stat.value} />
              </div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll to explore</span>
        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
