import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '@/data/memories';

export default function HeroSection() {
  const navigate = useNavigate();
  const [selectedMemory, setSelectedMemory] = useState(null);

  const handleMemoryClick = (memory) => {
    setSelectedMemory(memory);
    setTimeout(() => {
      navigate(`/explore?memory=${memory.id}`);
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-space-black">
      {/* Constellation canvas fills the background */}
      <div className="absolute inset-0">
        <ConstellationCanvas onMemoryClick={handleMemoryClick} />
      </div>

      {/* Radial gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,8,16,0.7) 70%, rgba(5,8,16,0.95) 100%)'
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-space-black to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-space-midnight border border-nebula-blue/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-aurora-teal animate-pulse" />
          <span className="text-aurora-teal text-xs font-sans font-medium tracking-widest uppercase">
            Global Memory Initiative · Est. 2051
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight max-w-4xl">
          <span className="block">Every Memory</span>
          <span className="block text-glow-blue" style={{ color: '#4f8ef7' }}>
            Is a Star
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-slate-300 text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
          Before humanity crosses the stars, we preserve what made us human.
          Explore <strong className="text-white">4.7 million memories</strong> from
          every era, every corner of Earth — a living archive of who we were.
        </p>

        <p className="font-sans text-slate-500 text-sm mb-10 italic">
          Each point of light above is a real memory. Move your cursor to explore.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => navigate('/explore')}
            className="bg-nebula-blue hover:bg-blue-500 text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base shadow-lg"
            style={{ boxShadow: '0 0 30px rgba(79,142,247,0.3)' }}
          >
            Explore the Archive
          </button>
          <button
            onClick={() => navigate('/contribute')}
            className="border border-slate-600 hover:border-nebula-blue/60 text-slate-300 hover:text-white font-sans font-medium px-8 py-4 rounded-xl transition-all duration-300 text-base"
          >
            Contribute a Memory
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-slate-800/60 bg-space-navy/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Memories Preserved', value: STATS.totalMemories },
            { label: 'Contributors', value: STATS.contributors },
            { label: 'Languages', value: STATS.languages },
            { label: 'Years of History', value: STATS.yearsSpanned },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-nebula-blue text-glow-blue">
                {stat.value}
              </div>
              <div className="font-sans text-xs text-slate-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
