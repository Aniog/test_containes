import { Link } from 'react-router-dom';

const TIMELINE = [
  { year: '2024', event: 'Memory Archive Initiative founded by the IMI Council' },
  { year: '2025', event: 'First 1 million memories preserved across 47 languages' },
  { year: '2026', event: 'Archive reaches 4.7 million memories from 194 countries' },
  { year: '2031', event: 'First migration fleet departs with complete archive copy' },
  { year: '2045', event: 'Archive projected to reach 50 million memories' },
  { year: '2100', event: 'Full archive transmitted to all colony ships' },
];

const PARTNERS = [
  { name: 'UNESCO Memory of the World', role: 'Heritage Partner' },
  { name: 'Global Oral History Network', role: 'Collection Partner' },
  { name: 'Interstellar Migration Initiative', role: 'Primary Sponsor' },
  { name: 'Digital Humanities Consortium', role: 'Technology Partner' },
  { name: 'Indigenous Voices Alliance', role: 'Cultural Partner' },
  { name: 'World Languages Institute', role: 'Translation Partner' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-space-black pt-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-space-mid to-space-black py-20 px-4 border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-nebula-blue text-xs font-medium tracking-widest uppercase mb-4">
            ✦ About the Initiative
          </div>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Why We Preserve
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stellar-gold to-memory-rose">
              Every Story
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            The Memory Archive is humanity's most ambitious cultural preservation project —
            a living record of who we were, built for those who will never see Earth.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Mission */}
        <section className="mb-20">
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-6">
            The Mission
          </h2>
          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              When the Interstellar Migration Initiative announced that 2.4 billion people
              would leave Earth over the next century, a question arose that no spacecraft
              engineer could answer: how do you carry a civilization?
            </p>
            <p>
              You can pack seeds, blueprints, and genetic libraries. You can digitize every
              book ever written. But what about the memory of rain on red earth? The sound
              of a grandmother's voice telling a story she heard from her grandmother? The
              weight of a moment that changed everything?
            </p>
            <p>
              The Memory Archive was founded on a simple belief: <span className="text-white font-medium">
              a people without memory is not a people at all.</span> We collect, preserve,
              and transmit the lived experiences of human beings across every era, culture,
              language, and continent — so that the children born on distant worlds will
              know where they came from.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mb-20">
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Collect',
                desc: 'Memories are submitted by individuals, families, oral historians, and cultural institutions in any language or format.',
                color: '#4f8ef7',
              },
              {
                step: '02',
                title: 'Preserve',
                desc: 'Each memory is transcribed, translated, tagged by era, location, emotion, and life event, then stored in redundant archives.',
                color: '#2dd4bf',
              },
              {
                step: '03',
                title: 'Transmit',
                desc: 'The complete archive is copied onto every migration vessel, ensuring humanity\'s story travels with every ship that leaves Earth.',
                color: '#f5c842',
              },
            ].map((item) => (
              <div key={item.step} className="bg-space-navy border border-slate-700/50 rounded-2xl p-6">
                <div
                  className="font-cinzel text-3xl font-bold mb-3"
                  style={{ color: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-8">
            Archive Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-blue via-aurora-teal to-transparent" />
            <div className="space-y-6 pl-12">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-nebula-blue border-2 border-space-black shadow-[0_0_8px_rgba(79,142,247,0.6)]" />
                  <div className="font-mono text-nebula-blue text-sm mb-1">{item.year}</div>
                  <p className="text-slate-300 text-sm">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="mb-20">
          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-8">
            Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PARTNERS.map((p) => (
              <div key={p.name} className="bg-space-navy border border-slate-700/50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-white text-sm font-medium">{p.name}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{p.role}</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-aurora-teal" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-br from-space-mid to-space-navy border border-slate-700/50 rounded-2xl p-10">
          <h2 className="font-cinzel text-2xl font-bold text-white mb-4">
            Your Memory Belongs Here
          </h2>
          <p className="text-slate-400 text-base mb-8 max-w-md mx-auto">
            Every human story matters. Add yours to the archive before the migration begins.
          </p>
          <Link
            to="/submit"
            className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-nebula-blue to-aurora-teal text-white font-semibold hover:opacity-90 transition-all hover:shadow-[0_0_30px_rgba(79,142,247,0.3)]"
          >
            Preserve a Memory
          </Link>
        </section>
      </div>
    </div>
  );
}
