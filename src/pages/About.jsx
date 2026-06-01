import { Link } from 'react-router-dom';

const TEAM = [
  {
    name: 'Dr. Amara Osei',
    role: 'Director of Memory Preservation',
    origin: 'Accra, Ghana',
    quote: 'Every story is a universe. We are building a galaxy.',
  },
  {
    name: 'Prof. Yuki Tanaka',
    role: 'Chief Archivist',
    origin: 'Kyoto, Japan',
    quote: 'The archive is not a museum. It is a living conversation across time.',
  },
  {
    name: 'Dr. Sofia Reyes',
    role: 'Head of Emotional Indexing',
    origin: 'Mexico City, Mexico',
    quote: 'Grief and joy are the same frequency. We preserve both.',
  },
  {
    name: 'Kwame Asante',
    role: 'Community Outreach Director',
    origin: 'Kumasi, Ghana',
    quote: 'The hardest memories to preserve are the ones people think don\'t matter.',
  },
];

const MILESTONES = [
  { year: '2041', event: 'Memory Archive Initiative founded by the United Earth Council' },
  { year: '2043', event: 'First 1 million memories catalogued across 47 languages' },
  { year: '2047', event: 'Emotional indexing system developed, enabling feeling-based search' },
  { year: '2051', event: 'Archive reaches 10 million memories; first satellite backup deployed' },
  { year: '2058', event: 'Partnership with 195 nations; universal contribution access granted' },
  { year: '2065', event: 'Archive surpasses 30 million memories; deep-space transmission begins' },
  { year: '2071', event: 'Migration Era collection launched; farewell memories catalogued' },
  { year: '2079', event: 'Archive reaches 47 million memories; first ship carries full archive copy' },
];

const About = () => (
  <main className="min-h-screen bg-void pt-16">
    <div className="relative bg-cosmos border-b border-stardust/30 py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 memory-gradient pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="text-memory text-xs font-mono tracking-widest uppercase mb-4">
          ✧ Our Story
        </div>
        <h1 className="font-cinzel font-bold text-5xl md:text-6xl text-starlight mb-6">
          About the Initiative
        </h1>
        <p className="text-mist text-xl max-w-2xl mx-auto leading-relaxed">
          We are the keepers of humanity's story. Before the stars, we preserve the Earth.
        </p>
      </div>
    </div>

    <section className="py-20 px-6 bg-void">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-aurora text-xs font-mono tracking-widest uppercase mb-4">◈ The Mission</div>
            <h2 className="font-cinzel font-bold text-3xl text-starlight mb-6">
              Why We Preserve
            </h2>
            <div className="space-y-4 text-mist leading-relaxed">
              <p>
                In 2041, as humanity began preparing for the greatest migration in history,
                a question arose: what do we take with us? Not just technology, not just
                genetics, not just knowledge — but memory. The texture of lived experience.
                The weight of grief. The lightness of joy.
              </p>
              <p>
                The Memory Archive Initiative was founded on a simple belief: that a
                civilization without its memories is not a civilization at all. We are
                the sum of what we have experienced, what we have felt, what we have
                passed down through generations.
              </p>
              <p>
                We do not leave Earth behind. We carry it with us, encoded in light,
                preserved in the archive, carried in the hearts of every person who
                boards a ship to the stars.
              </p>
            </div>
          </div>
          <div className="bg-nebula border border-stardust/50 rounded-2xl p-8">
            <div className="space-y-6">
              {[
                { label: 'Total Memories', value: '47.3M+', color: 'text-aurora-glow' },
                { label: 'Languages Preserved', value: '4,891', color: 'text-memory' },
                { label: 'Years of History', value: '12,000+', color: 'text-warmth' },
                { label: 'Active Contributors', value: '8.2M', color: 'text-aurora-glow' },
                { label: 'Countries Represented', value: '195', color: 'text-memory' },
                { label: 'Daily New Fragments', value: '142,000', color: 'text-warmth' },
              ].map(stat => (
                <div key={stat.label} className="flex items-center justify-between border-b border-stardust/30 pb-4 last:border-0 last:pb-0">
                  <span className="text-mist text-sm">{stat.label}</span>
                  <span className={`font-cinzel font-bold text-xl ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-cosmos">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-warmth text-xs font-mono tracking-widest uppercase mb-4">★ Timeline</div>
          <h2 className="font-cinzel font-bold text-3xl text-starlight">Our Journey</h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stardust/50" />
          <div className="space-y-8">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-12 md:pl-0`}
              >
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-aurora border-2 border-void mt-1" />
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="text-aurora font-mono text-sm font-bold mb-1">{m.year}</div>
                  <p className="text-mist text-sm leading-relaxed">{m.event}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-memory text-xs font-mono tracking-widest uppercase mb-4">◈ The Team</div>
          <h2 className="font-cinzel font-bold text-3xl text-starlight">Guardians of Memory</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map(member => (
            <div key={member.name} className="bg-nebula border border-stardust/50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-stardust/50 border border-aurora/30 flex items-center justify-center mx-auto mb-4">
                <span className="font-cinzel text-aurora text-xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h3 className="font-cinzel text-starlight font-semibold mb-1">{member.name}</h3>
              <p className="text-aurora text-xs font-mono mb-1">{member.role}</p>
              <p className="text-fog text-xs font-mono mb-4">{member.origin}</p>
              <p className="text-mist text-xs italic leading-relaxed">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-cosmos">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-aurora text-xs font-mono tracking-widest uppercase mb-4">✦ Join Us</div>
        <h2 className="font-cinzel font-bold text-3xl text-starlight mb-6">
          Your Memory Belongs Here
        </h2>
        <p className="text-mist mb-10 leading-relaxed">
          Every human life contains moments worth preserving. Whether it's the smell
          of your grandmother's kitchen, the sound of a language no one else speaks,
          or the feeling of watching your child take their first steps — your story
          is part of humanity's story.
        </p>
        <Link
          to="/contribute"
          className="inline-block bg-aurora text-void font-semibold px-10 py-4 rounded-lg hover:bg-aurora-glow transition-all duration-300"
        >
          Contribute Your Memory
        </Link>
      </div>
    </section>
  </main>
);

export default About;
