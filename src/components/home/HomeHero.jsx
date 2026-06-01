import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';

const STATS = [
  { value: '4.7M', label: 'Memories Preserved' },
  { value: '194', label: 'Countries Represented' },
  { value: '12,000+', label: 'Years of History' },
  { value: '89', label: 'Languages' },
];

export default function HomeHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050810]">
      <ConstellationCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,21,48,0.4)_0%,rgba(5,8,16,0.85)_70%)] pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e8c97a]/30 bg-[#e8c97a]/5 text-[#e8c97a] text-sm font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8c97a] animate-pulse" />
          Interstellar Migration Archive · Est. 2041
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          Every Memory
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c97a] via-[#f0d98a] to-[#c084fc]">
            Carries a Star
          </span>
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Before humanity crosses the void between stars, we preserve what made us human.
          Millions of memories — a grandmother's recipe, a child's first word, a soldier's last letter —
          archived forever in the light we carry forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/explore"
            className="px-8 py-4 bg-[#e8c97a] text-[#050810] font-semibold rounded-lg hover:bg-[#f0d98a] transition-all duration-200 text-base shadow-[0_0_30px_rgba(232,201,122,0.3)]"
          >
            Explore the Archive
          </Link>
          <Link
            to="/submit"
            className="px-8 py-4 border border-[#e8c97a]/50 text-[#e8c97a] font-semibold rounded-lg hover:bg-[#e8c97a]/10 transition-all duration-200 text-base"
          >
            Preserve Your Memory
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-[#e8c97a] mb-1">
                {s.value}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs tracking-widest uppercase">
        <span>Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
