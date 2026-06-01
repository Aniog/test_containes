import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

const COUNTER_TARGETS = [
  { label: 'Memories Preserved', value: '4.7M+', delay: 0 },
  { label: 'Countries', value: '194', delay: 150 },
  { label: 'Languages', value: '312', delay: 300 },
  { label: 'Years of History', value: '12,000+', delay: 450 },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      {/* Constellation background */}
      <ConstellationCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,142,247,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-nebula-dim bg-surface/60 backdrop-blur-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-nebula-teal animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-nebula-teal">
            Global Memory Initiative · Est. 2051
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-cinzel font-bold text-5xl md:text-7xl lg:text-8xl text-starlight leading-tight mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s',
          }}
        >
          Every Memory
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-blue via-nebula-purple to-nebula-teal">
            Is a Star
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-muted-text max-w-2xl mx-auto mb-10 leading-relaxed font-inter"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          }}
        >
          Before humanity departs for the stars, we preserve what made us human.
          Explore 4.7 million recorded memories spanning 12,000 years of civilization —
          every joy, every loss, every ordinary miracle.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s',
          }}
        >
          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-3.5 rounded-lg bg-nebula-blue text-white font-semibold text-sm tracking-wide hover:bg-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(79,142,247,0.3)] hover:shadow-[0_0_50px_rgba(79,142,247,0.5)]"
          >
            Explore Memories
          </button>
          <button
            onClick={() => navigate('/submit')}
            className="px-8 py-3.5 rounded-lg border border-nebula-dim text-starlight font-semibold text-sm tracking-wide hover:border-nebula-blue hover:text-nebula-blue transition-all duration-300 backdrop-blur-sm bg-surface/30"
          >
            Submit Your Memory
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease 0.6s',
          }}
        >
          {COUNTER_TARGETS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel text-2xl md:text-3xl font-bold text-nebula-blue mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-text uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 0.5 : 0,
          transition: 'opacity 1s ease 1.2s',
        }}
      >
        <span className="text-xs text-muted-text tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-nebula-blue to-transparent animate-pulse" />
      </div>
    </section>
  );
}
