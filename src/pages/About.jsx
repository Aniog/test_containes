import { Rocket, Globe, Archive, Users, Shield, Star } from 'lucide-react';

const TIMELINE = [
  { year: '2041', event: 'First confirmed exoplanet with breathable atmosphere discovered.' },
  { year: '2047', event: 'UN Resolution 2047 authorizes the Global Migration Program.' },
  { year: '2051', event: 'Memory Preservation Initiative founded. Archive begins.' },
  { year: '2058', event: 'First colony ship, the Remembrance, launches with 12,000 passengers.' },
  { year: '2063', event: 'Archive reaches 1 million memories. 180 languages represented.' },
  { year: '2071', event: 'Mass migration begins. 40 ships depart in the first wave.' },
  { year: '2100', event: 'Final Earth departure. Archive sealed with 4.7 million memories.' },
];

const PARTNERS = [
  'United Nations Cultural Heritage Division',
  'Global Digital Library Consortium',
  'Interstellar Migration Authority',
  'World Oral History Foundation',
  'Institute for Memory Science',
  'Earth Archive Foundation',
];

export default function About() {
  return (
    <div className="min-h-screen bg-space-black pt-16">
      {/* Hero */}
      <section className="py-24 px-4 md:px-8 bg-space-navy border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-nebula-blue/15 border border-nebula-blue/30 flex items-center justify-center mx-auto mb-6">
            <Star className="w-8 h-8 text-nebula-blue" />
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-6">
            About the Initiative
          </h1>
          <p className="font-inter text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            The Global Memory Preservation Initiative exists to ensure that when humanity leaves Earth, it carries the full weight of its history — not just in data, but in feeling.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-4">
                Why We Exist
              </h2>
              <p className="font-inter text-slate-300 leading-relaxed mb-4">
                History has always been written by those with power. The Memory Archive is different. We collect the stories of everyone — the farmer, the child, the refugee, the scientist, the elder who remembers a world before screens.
              </p>
              <p className="font-inter text-slate-400 leading-relaxed">
                When the colony ships reach their destination, the children born among the stars will open this archive and know: this is where we came from. This is what we loved. This is what we lost. This is what made us human.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Archive className="w-5 h-5" />, label: '4.7M', sub: 'Memories' },
                { icon: <Globe className="w-5 h-5" />, label: '312', sub: 'Languages' },
                { icon: <Users className="w-5 h-5" />, label: '892K', sub: 'Contributors' },
                { icon: <Rocket className="w-5 h-5" />, label: '40+', sub: 'Colony Ships' },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-xl bg-space-navy border border-slate-800 text-center">
                  <div className="text-nebula-blue mb-2 flex justify-center">{s.icon}</div>
                  <div className="font-cinzel text-2xl font-bold text-stardust-gold">{s.label}</div>
                  <div className="font-inter text-xs text-slate-500 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div id="timeline" className="mb-20">
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              The Road to the Stars
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-blue/50 via-cosmic-violet/30 to-transparent" />
              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <div key={item.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10 md:text-right">
                      {i % 2 === 0 && (
                        <div className="p-4 rounded-xl bg-space-navy border border-slate-800 inline-block text-left md:text-right">
                          <div className="font-cinzel text-nebula-blue font-bold mb-1">{item.year}</div>
                          <div className="font-inter text-sm text-slate-300">{item.event}</div>
                        </div>
                      )}
                    </div>
                    <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-nebula-blue border-2 border-space-black shadow-[0_0_10px_rgba(79,142,247,0.6)] mt-4" />
                    <div className="md:w-1/2 pl-10 md:pl-10">
                      {i % 2 !== 0 && (
                        <div className="p-4 rounded-xl bg-space-navy border border-slate-800 inline-block">
                          <div className="font-cinzel text-nebula-blue font-bold mb-1">{item.year}</div>
                          <div className="font-inter text-sm text-slate-300">{item.event}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partners */}
          <div id="partners" className="mb-20">
            <h2 className="font-cinzel text-2xl font-bold text-white mb-8 text-center">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PARTNERS.map((p) => (
                <div key={p} className="flex items-center gap-3 p-4 rounded-xl bg-space-navy border border-slate-800">
                  <Shield className="w-4 h-4 text-aurora-teal flex-shrink-0" />
                  <span className="font-inter text-sm text-slate-300">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq">
            <h2 className="font-cinzel text-2xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Who can submit a memory?',
                  a: 'Anyone on Earth. We accept memories in any language, from any era, in any format — written, audio, video, or image. Our team of archivists will help translate and preserve your submission.',
                },
                {
                  q: 'How are memories preserved on the colony ships?',
                  a: 'The archive is stored on quantum-encrypted solid-state drives with triple redundancy. Each colony ship carries a complete copy. The data is also encoded in synthetic DNA for ultra-long-term preservation.',
                },
                {
                  q: 'Can I submit memories on behalf of someone who has passed?',
                  a: 'Yes. We actively encourage the preservation of memories from those who can no longer speak for themselves. Family members, friends, and community historians are all welcome to contribute.',
                },
                {
                  q: 'Will future generations be able to access the archive?',
                  a: 'The archive is designed to be readable by any sufficiently advanced civilization. We include linguistic keys, cultural context, and translation matrices to ensure the memories remain comprehensible across centuries.',
                },
              ].map((faq) => (
                <div key={faq.q} className="p-5 rounded-xl bg-space-navy border border-slate-800">
                  <h3 className="font-cinzel text-base font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="font-inter text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
