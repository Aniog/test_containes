import { useNavigate } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

export default function HomeHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cosmos-black">
      {/* Constellation background */}
      <ConstellationCanvas />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,21,48,0.4)_0%,rgba(5,8,16,0.7)_70%)]" />

      {/* Nebula glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-violet/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-nebula-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stardust-cyan/3 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.4em] uppercase text-stardust-cyan mb-6 animate-fade-in font-inter">
          Global Memory Preservation Initiative · Est. 2047
        </p>

        {/* Main title */}
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-memory-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.1s', textShadow: '0 0 60px rgba(124,58,237,0.4)' }}>
          Every Memory
          <br />
          <span className="bg-gradient-to-r from-nebula-violet via-stardust-cyan to-nebula-pink bg-clip-text text-transparent">
            A Star
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-memory-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-inter"
          style={{ animationDelay: '0.25s' }}>
          Before humanity crosses the stars, we preserve what made us human.
          Explore millions of memories spanning five thousand years of life on Earth.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => navigate('/explore')}
            className="px-8 py-4 bg-nebula-violet hover:bg-nebula-violet/80 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] font-inter text-sm tracking-wide"
          >
            Explore the Archive
          </button>
          <button
            onClick={() => navigate('/submit')}
            className="px-8 py-4 border border-memory-muted/40 hover:border-nebula-violet text-memory-muted hover:text-memory-white rounded-full transition-all duration-300 font-inter text-sm tracking-wide"
          >
            Submit Your Memory
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: STATS.totalMemories, label: 'Memories Preserved' },
            { value: STATS.contributors, label: 'Contributors' },
            { value: STATS.languages, label: 'Languages' },
            { value: `${STATS.yearsSpanned.toLocaleString()}+`, label: 'Years of History' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel text-2xl md:text-3xl font-bold text-memory-white mb-1"
                style={{ textShadow: '0 0 20px rgba(124,58,237,0.5)' }}>
                {stat.value}
              </div>
              <div className="text-xs text-memory-muted tracking-widest uppercase font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-memory-muted tracking-widest uppercase font-inter">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-memory-muted/40 to-transparent" />
      </div>
    </section>
  );
}
