import { useNavigate } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { getStats } from '../../data/memories';

const stats = getStats();

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-space-black">
      {/* Constellation background */}
      <ConstellationCanvas />

      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-space-black to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Mission badge */}
        <div className="inline-flex items-center gap-2 bg-cosmic-blue/10 border border-cosmic-blue/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cosmic-blue animate-pulse" />
          <span className="text-cosmic-blue text-sm font-mono tracking-widest uppercase">
            Interstellar Migration Initiative · Est. 2051
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-space text-5xl md:text-7xl lg:text-8xl font-bold text-star-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Every Memory
          <br />
          <span className="bg-gradient-to-r from-cosmic-blue via-cosmic-violet to-cosmic-rose bg-clip-text text-transparent">
            Deserves to Travel
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-star-dim text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body animate-fade-in-up"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          Before humanity crosses the stars, we are preserving every story ever lived.
          Explore 4.7 million recorded memories — organized by era, place, emotion, and life event.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <button
            onClick={() => navigate('/explore')}
            className="bg-cosmic-blue hover:bg-cosmic-blue/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(74,158,255,0.4)] hover:shadow-[0_0_50px_rgba(74,158,255,0.6)] text-base"
          >
            Explore the Archive
          </button>
          <button
            onClick={() => navigate('/submit')}
            className="border border-cosmic-violet/50 text-cosmic-violet hover:bg-cosmic-violet/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base"
          >
            Submit Your Memory
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          {[
            { value: stats.totalMemories, label: 'Memories Archived' },
            { value: stats.contributors, label: 'Contributors' },
            { value: stats.countries, label: 'Countries' },
            { value: stats.yearsSpanned, label: 'Years of History' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-space text-star-white mb-1">
                {stat.value}
              </div>
              <div className="text-star-dim text-xs font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-star-dim text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-star-dim to-transparent" />
      </div>
    </section>
  );
}
