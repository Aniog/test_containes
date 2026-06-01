export default function About() {
  const milestones = [
    { year: '2051', event: 'Mnemo Initiative founded by the United Earth Council' },
    { year: '2053', event: 'First 100,000 memories collected across 47 countries' },
    { year: '2058', event: 'Neural Imprint technology approved for memory capture' },
    { year: '2063', event: 'Archive reaches 1 million preserved memories' },
    { year: '2067', event: 'First memories transmitted to Proxima Station Alpha' },
    { year: '2071', event: 'Partnership with 312 language preservation societies' },
    { year: '2089', event: 'Archive surpasses 4 million memories — all eras represented' },
    { year: '2094', event: 'Physical archive copies launched aboard migration vessels' },
  ];

  const team = [
    { name: 'Dr. Amara Osei', role: 'Founder & Director', region: 'Africa' },
    { name: 'Prof. Chen Wei', role: 'Chief Archivist', region: 'Asia' },
    { name: 'Dr. Sofia Kowalski', role: 'Neural Imprint Lead', region: 'Europe' },
    { name: 'Yara Carvalho', role: 'Community Director', region: 'Americas' },
  ];

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Hero */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #4f8ef7 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-aurora-teal" />
            <span className="font-sans text-xs text-aurora-teal uppercase tracking-widest">About Mnemo</span>
            <span className="w-8 h-px bg-aurora-teal" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why We Preserve Memory
          </h1>
          <p className="font-sans text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            When humanity leaves Earth, we carry more than bodies and technology.
            We carry 40,000 years of stories, grief, joy, and wonder. Mnemo exists
            to ensure none of it is lost.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: '◎',
              color: '#4f8ef7',
              title: 'Preserve',
              desc: 'Collect and safeguard memories from every culture, era, and corner of Earth before the migration.',
            },
            {
              icon: '◈',
              color: '#2dd4bf',
              title: 'Connect',
              desc: 'Link memories across time and space, revealing the threads that bind all human experience.',
            },
            {
              icon: '✦',
              color: '#f5c842',
              title: 'Transmit',
              desc: 'Carry the archive aboard migration vessels so future generations know where they came from.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-space-navy border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-3xl mb-4" style={{ color: item.color }}>{item.icon}</div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-blue/50 via-void-purple/50 to-transparent" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 pl-12 relative">
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-space-midnight border border-nebula-blue/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-nebula-blue" />
                  </div>
                  <div>
                    <span className="font-sans text-xs font-semibold text-nebula-blue uppercase tracking-wider">{m.year}</span>
                    <p className="font-sans text-sm text-slate-300 mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            The Archivists
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member) => (
              <div key={member.name} className="bg-space-navy border border-slate-800 rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center font-serif text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)' }}>
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-serif text-sm font-semibold text-white mb-1">{member.name}</h4>
                <p className="font-sans text-xs text-slate-500 mb-1">{member.role}</p>
                <p className="font-sans text-xs text-nebula-blue">{member.region}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
