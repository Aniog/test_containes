import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-space-black">
      {/* Constellation background */}
      <ConstellationCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(79,142,247,0.06) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-nebula-blue/30 bg-nebula-blue/10">
          <span className="w-1.5 h-1.5 rounded-full bg-nebula-blue animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-nebula-blue font-medium">
            Global Memory Initiative · Est. 2051
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-white leading-none mb-6 tracking-tight">
          Every Memory
          <br />
          <span className="italic text-nebula-blue">Carries Us</span>
          <br />
          Forward
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Before humanity crosses the stars, we preserve what made us human.
          Explore {STATS.totalMemories} recorded memories spanning {STATS.yearsSpanned} years
          of civilization — every joy, every loss, every ordinary Tuesday.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            to="/explore"
            className="px-8 py-4 rounded-full bg-nebula-blue text-white font-medium text-sm uppercase tracking-widest hover:bg-nebula-blue/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,142,247,0.4)]"
          >
            Explore Memories
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 rounded-full border border-slate-600 text-slate-300 font-medium text-sm uppercase tracking-widest hover:border-slate-400 hover:text-white transition-all duration-300"
          >
            Our Mission
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: STATS.totalMemories, label: 'Memories Archived' },
            { value: STATS.contributors, label: 'Contributors' },
            { value: STATS.languages, label: 'Languages' },
            { value: STATS.yearsSpanned, label: 'Years of History' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-white font-light mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
