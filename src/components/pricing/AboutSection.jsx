const values = [
  {
    title: 'AI-first, always',
    description: 'We believe AI should be the foundation of every web experience, not an afterthought. Every feature we build starts with intelligence.',
  },
  {
    title: 'Radical simplicity',
    description: 'Complexity is the enemy of great work. We obsess over removing friction so you can focus on building, not configuring.',
  },
  {
    title: 'Transparent by default',
    description: 'No dark patterns, no hidden fees, no lock-in. We earn your trust by being honest about what we do and how we do it.',
  },
  {
    title: 'Built for humans',
    description: 'Technology should serve people, not the other way around. Every decision we make is guided by what\'s best for the humans using our platform.',
  },
];

const team = [
  {
    name: 'Elena Vasquez',
    role: 'CEO & Co-founder',
    bio: 'Former ML lead at Google Brain. Obsessed with making AI accessible to everyone.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop',
  },
  {
    name: 'James Park',
    role: 'CTO & Co-founder',
    bio: 'Built infrastructure at Stripe and Vercel. Believes great software is invisible.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop',
  },
  {
    name: 'Aisha Okonkwo',
    role: 'Head of Design',
    bio: 'Award-winning designer from IDEO. Crafts experiences that feel effortless.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop',
  },
  {
    name: 'David Chen',
    role: 'Head of AI Research',
    bio: 'PhD in NLP from MIT. Leads the team building Arcis\'s core language models.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
  },
];

export default function AboutSection() {
  return (
    <>
      {/* Vision */}
      <section className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #fff 1px, transparent 1px),
                linear-gradient(to bottom, #fff 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
          <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-800" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Our vision</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                A web where every business has a world-class presence
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                We started Arcis because we believed the gap between a great idea and a great website was too wide. Too many brilliant businesses were held back by technical complexity, high agency costs, and slow iteration cycles.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Arcis AI closes that gap. We're building the platform that makes professional, intelligent web presence accessible to every business — from solo founders to Fortune 500 teams.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900 border border-gray-700 rounded-xl p-5 hidden md:block">
                <p className="text-white font-bold text-2xl">2022</p>
                <p className="text-gray-500 text-xs">Founded in San Francisco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 border-t border-dashed border-gray-200" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Our values</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {values.map(({ title, description }) => (
              <div key={title} className="bg-white p-8 hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 border-t border-dashed border-gray-300" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">The team</p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Built by people who care</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, avatar }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover mb-4"
                />
                <h3 className="text-base font-semibold text-gray-900">{name}</h3>
                <p className="text-xs text-indigo-600 font-medium mb-2">{role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
