import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Eye, Zap, Globe, FlaskConical } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Invisible to the Naked Eye',
    desc: 'Most microbial life exists at scales of 1–100 micrometers — a human hair is 70 micrometers wide, yet entire ecosystems thrive within that space.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Zap,
    title: 'Powering All Life',
    desc: 'Microorganisms drive the nitrogen cycle, oxygen production, and decomposition — without them, complex life on Earth would cease to exist within decades.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Globe,
    title: 'Everywhere on Earth',
    desc: 'From the deepest ocean trenches to the upper atmosphere, from volcanic vents to Antarctic ice — microbes colonize every environment imaginable.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: FlaskConical,
    title: 'Billions of Years Old',
    desc: 'The first microbial life appeared 3.8 billion years ago. For 2 billion years, microbes were the only life on Earth, shaping the planet we know today.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
];

export default function Explore() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-slate-950 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Why It Matters
          </span>
          <h2 id="explore-title" className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            The Hidden Foundation of Life
          </h2>
          <p id="explore-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
            Microorganisms are not just tiny — they are the architects of our biosphere,
            the engineers of evolution, and the silent guardians of planetary health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`bg-slate-900/60 backdrop-blur-sm border ${f.border} rounded-2xl p-8 hover:border-opacity-60 hover:shadow-[0_0_25px_rgba(0,229,255,0.08)] transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 ${f.bg} border ${f.border} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-slate-50 text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10³⁰', label: 'Microbes on Earth' },
            { value: '3.8B', label: 'Years of Evolution' },
            { value: '70%', label: 'Ocean Oxygen from Microbes' },
            { value: '39T', label: 'Microbes in Human Body' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-slate-900/40 border border-cyan-900/30 rounded-2xl p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
