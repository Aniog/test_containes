import { useNavigate } from 'react-router-dom';
import { Rocket, Globe, Archive, Users } from 'lucide-react';

const PILLARS = [
  {
    icon: Archive,
    title: 'Preserve',
    color: '#4f8ef7',
    description: 'Every memory submitted is encoded in multiple formats and stored across distributed systems designed to survive millennia.',
  },
  {
    icon: Globe,
    title: 'Connect',
    color: '#2dd4bf',
    description: 'Memories from every culture, language, and era are woven together into a single tapestry of human experience.',
  },
  {
    icon: Users,
    title: 'Contribute',
    color: '#a78bfa',
    description: 'Anyone can submit a memory. Your story — however small it seems — is irreplaceable. No life is too ordinary to archive.',
  },
  {
    icon: Rocket,
    title: 'Carry Forward',
    color: '#f5c842',
    description: 'When the first ships depart in 2051, the complete archive travels with them. Earth\'s story will live among the stars.',
  },
];

const TIMELINE = [
  { year: '2026', event: 'Memory Archive Initiative founded. First 10 million memories collected.' },
  { year: '2030', event: 'Archive reaches 100 million memories across 150 countries.' },
  { year: '2035', event: 'Universal translation layer added. All memories accessible in any language.' },
  { year: '2040', event: 'Physical archive crystals manufactured. Each holds 1 billion memories.' },
  { year: '2045', event: 'Archive sealed and loaded onto migration vessels.' },
  { year: '2051', event: 'The Great Migration begins. Humanity carries its memories to the stars.' },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Hero */}
      <div className="relative px-4 py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(79,142,247,0.08) 0%, transparent 60%)' }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-nebula-blue text-sm tracking-[0.3em] uppercase font-inter mb-4">Our Mission</p>
          <h1 className="font-cinzel text-4xl md:text-6xl text-white mb-6 leading-tight">
            The Last Archive<br />
            <span className="text-stardust-gold">Before the Stars</span>
          </h1>
          <p className="text-slate-300 text-lg font-inter leading-relaxed max-w-2xl mx-auto">
            In 2051, humanity will begin its greatest journey. Before we leave,
            we must ensure that everything we were — every joy, every loss, every
            ordinary Tuesday — travels with us.
          </p>
        </div>
      </div>

      {/* Four pillars */}
      <div className="px-4 py-16 bg-space-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-white text-center mb-12">
            Four Pillars of the Archive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(pillar => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-space-midnight border border-slate-800 rounded-xl p-6 text-center"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: pillar.color + '20', border: `1px solid ${pillar.color}40` }}
                  >
                    <Icon size={20} style={{ color: pillar.color }} />
                  </div>
                  <h3 className="font-cinzel text-white text-lg mb-3">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm font-inter leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Migration timeline */}
      <div className="px-4 py-20 bg-space-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cinzel text-2xl md:text-3xl text-white text-center mb-12">
            Road to Migration
          </h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-blue/60 via-nebula-blue/30 to-transparent" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="w-12 text-right flex-shrink-0">
                    <span className="text-nebula-blue text-sm font-cinzel font-semibold">{item.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div
                      className="w-3 h-3 rounded-full border-2 border-space-black"
                      style={{
                        backgroundColor: i === TIMELINE.length - 1 ? '#f5c842' : '#4f8ef7',
                        boxShadow: `0 0 10px ${i === TIMELINE.length - 1 ? '#f5c84260' : '#4f8ef760'}`,
                      }}
                    />
                  </div>
                  <p className="text-slate-300 text-sm font-inter leading-relaxed pt-0.5">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 py-20 bg-gradient-to-b from-space-black to-space-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-cinzel text-3xl text-white mb-4">Your Memory Belongs Here</h2>
          <p className="text-slate-400 font-inter mb-8">
            Every person who has ever lived deserves to be remembered. Add your story to the archive before the ships depart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/submit')}
              className="px-8 py-4 bg-nebula-blue hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 font-inter"
            >
              Submit a Memory
            </button>
            <button
              onClick={() => navigate('/explore')}
              className="px-8 py-4 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white rounded-lg transition-all duration-300 font-inter"
            >
              Explore the Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
