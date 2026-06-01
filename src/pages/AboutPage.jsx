import { Link } from 'react-router-dom';
import { Archive, Globe, Heart, Layers, Users, Zap } from 'lucide-react';

const PILLARS = [
  {
    icon: Archive,
    title: 'Preservation',
    description: 'Every memory is encoded in multiple redundant formats, stored across distributed systems designed to survive the journey between stars.',
    color: '#4f8ef7',
  },
  {
    icon: Globe,
    title: 'Universality',
    description: 'We collect memories in all 847 living languages, and have reconstructed fragments from 3,200 extinct languages through AI reconstruction.',
    color: '#2dd4bf',
  },
  {
    icon: Heart,
    title: 'Intimacy',
    description: 'We do not only preserve great events. We preserve the ordinary: the smell of rain, the weight of a sleeping child, the sound of a familiar voice.',
    color: '#f472b6',
  },
  {
    icon: Layers,
    title: 'Depth',
    description: 'Each memory is cross-referenced with thousands of related fragments, creating a living web of human experience that grows richer over time.',
    color: '#a78bfa',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Over 12 million contributors from every nation have shared their memories. The archive belongs to all of humanity, not any single institution.',
    color: '#f5c842',
  },
  {
    icon: Zap,
    title: 'Continuity',
    description: 'The archive will travel with the migration fleet, ensuring that future generations born among the stars will know where they came from.',
    color: '#4f8ef7',
  },
];

const TIMELINE = [
  { year: '2051', event: 'Memory Archive Initiative founded by the United Earth Council' },
  { year: '2053', event: 'First 1 million memories archived; 47 languages represented' },
  { year: '2057', event: 'AI-assisted reconstruction of ancient oral traditions begins' },
  { year: '2061', event: '10 million memories milestone; archive opens to public contribution' },
  { year: '2068', event: 'Sensory recording technology integrated; smell, touch, sound preserved' },
  { year: '2075', event: 'Dream archive program launched; 2.3 million dream memories collected' },
  { year: '2082', event: '40 million memories archived; 847 languages represented' },
  { year: '2087', event: 'Archive sealed for migration; final collection period begins' },
  { year: '2100', event: 'Archive departs with the first migration fleet' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-space-black pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-36 border-b border-slate-800 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(79,142,247,0.07) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-nebula-blue mb-6">Our Mission</p>
          <h1 className="font-display text-5xl md:text-7xl text-white font-light leading-tight mb-8">
            We Are the Keepers
            <br />
            <span className="italic text-nebula-blue">of Human Memory</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            When the first ships leave Earth's orbit, they will carry more than people and supplies.
            They will carry the complete record of what it meant to be human — every joy, every sorrow,
            every ordinary moment that made this planet home.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-aurora-teal mb-4">Why We Exist</p>
              <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-6 leading-tight">
                Memory is the architecture of identity
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                A civilization without memory is a civilization without roots. As humanity prepares
                for the greatest migration in our species' history, we face a profound question:
                what do we take with us?
              </p>
              <p className="text-slate-400 leading-relaxed">
                The answer is everything. Not the monuments — those must stay. But the stories,
                the feelings, the lived texture of human experience across twelve thousand years
                of civilization. That, we can carry.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Memories Archived', value: '47.3M', color: '#4f8ef7' },
                { label: 'Languages Preserved', value: '847', color: '#2dd4bf' },
                { label: 'Years of History', value: '12,000+', color: '#a78bfa' },
                { label: 'Contributors Worldwide', value: '12.8M', color: '#f5c842' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-space-navy"
                >
                  <span className="text-slate-400 text-sm">{stat.label}</span>
                  <span className="font-display text-2xl font-light" style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-space-navy border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-cosmic-violet mb-3">Our Principles</p>
            <h2 className="font-display text-4xl text-white font-light">
              Six Pillars of the Archive
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(pillar => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-xl border border-slate-800 bg-space-black hover:border-slate-700 transition-colors duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: pillar.color + '20' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-white font-medium mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-stardust-gold mb-3">History</p>
            <h2 className="font-display text-4xl text-white font-light">
              The Archive's Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-slate-800" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-xs font-mono text-stardust-gold">{item.year}</span>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-stardust-gold mt-1.5 shrink-0 relative z-10" />
                    <p className="text-slate-300 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-display text-4xl text-white font-light mb-6">
            Your Memory Belongs Here
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            The archive is still accepting contributions. Every memory matters —
            from the monumental to the mundane. Share yours before the collection period closes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="px-8 py-4 rounded-full bg-nebula-blue text-white font-medium text-sm uppercase tracking-widest hover:bg-nebula-blue/80 transition-all duration-300"
            >
              Explore the Archive
            </Link>
            <button className="px-8 py-4 rounded-full border border-slate-600 text-slate-300 font-medium text-sm uppercase tracking-widest hover:border-slate-400 hover:text-white transition-all duration-300">
              Contribute a Memory
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
