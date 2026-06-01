import { useNavigate } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';

const STATS = [
  { value: '4.7M+', label: 'Memories Preserved' },
  { value: '194', label: 'Countries Represented' },
  { value: '12', label: 'Languages Archived' },
  { value: '2057', label: 'Migration Year' },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 60%, #0a1628 0%, #050810 70%)' }}
    >
      <ConstellationCanvas />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, #050810 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Archive badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4a9eff]/30 bg-[#4a9eff]/10 text-[#4a9eff] text-xs font-medium tracking-widest uppercase mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4a9eff] animate-pulse-glow inline-block" />
          Global Memory Archive — Est. 2041
        </div>

        <h1
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s', color: '#e8edf5', textShadow: '0 0 60px rgba(74,158,255,0.3)' }}
        >
          Every Memory
          <br />
          <span style={{ color: '#4a9eff' }}>Carries Us</span>
          <br />
          Forward
        </h1>

        <p
          className="text-[#8899b4] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Before humanity crosses the stars, we preserve what made us human.
          Explore millions of memories — moments of joy, grief, wonder, and love —
          collected from every corner of Earth.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #4a9eff, #2563eb)',
              color: '#fff',
              boxShadow: '0 0 24px rgba(74,158,255,0.4)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(74,158,255,0.6)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(74,158,255,0.4)'; }}
          >
            Explore the Archive
          </button>
          <button
            onClick={() => navigate('/submit')}
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide border border-white/20 text-[#e8edf5] hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Submit Your Memory
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-cinzel text-2xl md:text-3xl font-bold" style={{ color: '#4a9eff' }}>
                {s.value}
              </div>
              <div className="text-xs text-[#8899b4] mt-1 tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4a5568] text-xs tracking-widest uppercase animate-float">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#4a5568] to-transparent" />
      </div>
    </section>
  );
}
