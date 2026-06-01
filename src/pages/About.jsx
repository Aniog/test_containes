import { Link } from 'react-router-dom';
import { STATS } from '../data/memories';

const PRINCIPLES = [
  {
    icon: '◉',
    title: 'Total Preservation',
    description: 'Every memory submitted is preserved in perpetuity — encoded in crystalline data structures designed to survive interstellar travel.',
    color: '#a78bfa',
  },
  {
    icon: '◈',
    title: 'Universal Access',
    description: 'The archive belongs to all of humanity. Every memory is freely accessible to anyone, anywhere, at any time.',
    color: '#67e8f9',
  },
  {
    icon: '✦',
    title: 'Authentic Voices',
    description: 'We preserve memories exactly as narrated — unedited, unfiltered, in every language and dialect humanity has ever spoken.',
    color: '#fcd34d',
  },
  {
    icon: '◎',
    title: 'Temporal Breadth',
    description: 'From the earliest oral traditions to the final days before departure, we capture the full arc of human civilization.',
    color: '#6ee7b7',
  },
];

const TEAM = [
  { name: 'Dr. Amara Osei', role: 'Director of Preservation', region: 'West Africa' },
  { name: 'Prof. Yuki Tanaka', role: 'Chief Archivist', region: 'East Asia' },
  { name: 'Elena Vasquez', role: 'Head of Oral Traditions', region: 'South America' },
  { name: 'Ibrahim Al-Rashid', role: 'Migration Liaison', region: 'Middle East' },
];

export default function About() {
  return (
    <main className="min-h-screen bg-void pt-24 pb-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 text-center py-16">
        <p className="text-xs font-mono tracking-widest text-aurora-light uppercase mb-6">◈ About the Initiative</p>
        <h1 className="font-cinzel text-4xl md:text-5xl font-light text-starlight tracking-wide mb-6">
          Why We Remember
        </h1>
        <p className="text-mist text-lg leading-relaxed max-w-2xl mx-auto">
          In {STATS.migrationDate}, humanity will leave Earth for the first time in our species' history.
          The Memory Archive was founded in {STATS.archiveDate} with a single mission: ensure that
          everything we were travels with us into the stars.
        </p>
      </section>

      {/* Mission statement */}
      <section className="bg-nebula border-y border-stardust/30 py-16 px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cinzel text-2xl md:text-3xl font-light text-starlight leading-relaxed tracking-wide">
            "A civilization is not its buildings or its borders.
            It is the sum of every moment its people have lived,
            loved, and lost. We carry all of it."
          </p>
          <p className="text-mist text-sm mt-6 font-mono">— Archive Founding Charter, 2060</p>
        </div>
      </section>

      {/* Principles */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-2xl md:text-3xl font-light text-starlight tracking-wide mb-3">
            Our Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="bg-nebula border border-stardust/40 rounded-2xl p-8 hover:border-aurora/30 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block" style={{ color: p.color }}>{p.icon}</span>
              <h3 className="font-cinzel text-lg font-light text-starlight mb-3 tracking-wide">{p.title}</h3>
              <p className="text-mist text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cosmos border-y border-stardust/30 py-16 px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: STATS.totalMemories, label: 'Memories' },
              { value: STATS.totalNarrators, label: 'Narrators' },
              { value: '194', label: 'Nations' },
              { value: '7,000+', label: 'Languages' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-cinzel text-3xl font-light text-aurora-light mb-2">{s.value}</p>
                <p className="text-xs font-mono tracking-widest text-ghost uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-2xl md:text-3xl font-light text-starlight tracking-wide mb-3">
            Archive Council
          </h2>
          <p className="text-mist text-sm">The global team preserving humanity's story</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-nebula border border-stardust/40 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-aurora/20 border border-aurora/30 flex items-center justify-center flex-shrink-0">
                <span className="text-aurora-light font-cinzel text-lg">
                  {member.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-starlight font-medium text-sm">{member.name}</p>
                <p className="text-mist text-xs">{member.role}</p>
                <p className="text-ghost text-xs font-mono">{member.region}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-cinzel text-2xl font-light text-starlight tracking-wide mb-4">
          Your Memory Belongs Here
        </h2>
        <p className="text-mist mb-8 leading-relaxed">
          The archive closes in {STATS.migrationDate}. Every memory submitted before then
          will travel with humanity to the stars.
        </p>
        <Link
          to="/contribute"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-aurora hover:bg-aurora/80 text-white font-medium tracking-wide transition-all duration-300 glow-aurora"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Contribute Your Memory
        </Link>
      </section>
    </main>
  );
}
