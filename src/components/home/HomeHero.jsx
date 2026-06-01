import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

const formatNumber = (n) => {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1) + 'B';
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
  return n.toString();
};

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="font-cinzel text-2xl md:text-3xl font-bold text-cyan-400">{value}</div>
    <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{label}</div>
  </div>
);

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050810]">
      <ConstellationCanvas />

      {/* Radial glow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/4 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs uppercase tracking-widest mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Global Memory Archive — Est. 2051
        </div>

        <h1
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <span className="text-slate-100">Every Memory</span>
          <br />
          <span className="text-gradient-cosmic">Humanity Ever Had</span>
        </h1>

        <p
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          Before we leave this world behind, we are preserving every story, every moment,
          every fragment of human experience. Explore the constellation of our shared past.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <Link
            to="/explore"
            className="px-8 py-3.5 rounded-full bg-cyan-500 text-black font-semibold text-sm uppercase tracking-wider hover:bg-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Explore Memories
          </Link>
          <Link
            to="/about"
            className="px-8 py-3.5 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm uppercase tracking-wider hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
          >
            Our Mission
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 p-6 rounded-2xl border border-slate-700/40 bg-[#080d1a]/80 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          <StatItem value={formatNumber(STATS.totalMemories)} label="Memories Preserved" />
          <StatItem value={formatNumber(STATS.contributors)} label="Contributors" />
          <StatItem value={STATS.languages.toLocaleString()} label="Languages" />
          <StatItem value={`${STATS.yearsSpanned.toLocaleString()}+`} label="Years of History" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-float">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
};

export default HomeHero;
