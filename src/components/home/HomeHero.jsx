import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { stats } from '@/data/memories';
import { ArrowDown, Star } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cosmos-950">
      <ConstellationCanvas />

      {/* Overlay gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cosmos-950 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="w-4 h-4 text-stardust-400 fill-stardust-400 animate-twinkle" />
          <span className="font-mono text-xs text-stardust-300 uppercase tracking-widest">
            Interstellar Migration Initiative · Est. 2041
          </span>
          <Star className="w-4 h-4 text-stardust-400 fill-stardust-400 animate-twinkle" style={{ animationDelay: '1.5s' }} />
        </div>

        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-nebula-300 via-aurora-300 to-stardust-300 bg-clip-text text-transparent">
            Memory
          </span>
          <br />
          <span className="text-text-primary">Archive</span>
        </h1>

        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Before we leave, we remember. Every human story, every moment of joy and grief,
          every sunrise witnessed and hand held — preserved for eternity across the stars.
        </p>

        <p className="font-mono text-text-muted text-sm mb-10 tracking-wide">
          {stats.totalMemories} memories · {stats.contributors} contributors · {stats.countries} nations · {stats.languages} languages
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/explore"
            className="bg-nebula-500 hover:bg-nebula-400 text-white rounded-full px-8 py-4 font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-nebula-500/30 hover:-translate-y-0.5"
          >
            Explore Memories
          </Link>
          <Link
            to="/about"
            className="border border-nebula-500/40 hover:border-nebula-400 text-nebula-300 hover:text-nebula-200 rounded-full px-8 py-4 font-semibold text-base transition-all duration-300"
          >
            Our Mission
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-text-muted animate-bounce">
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
