import { Link } from 'react-router-dom'
import { Archive, Globe, Heart, Shield, Star, Users, ArrowRight } from 'lucide-react'

const timeline = [
  {
    year: '2051',
    title: 'The Announcement',
    description: 'The Interstellar Migration Council announces the Great Migration — humanity\'s first interstellar journey to Kepler-452b, departing 2091.',
    color: '#818cf8',
  },
  {
    year: '2055',
    title: 'The Memory Crisis',
    description: 'Historians and philosophers warn that the migration will sever humanity from its cultural roots. The call for a global memory archive begins.',
    color: '#f472b6',
  },
  {
    year: '2059',
    title: 'The Geneva Accord',
    description: '194 nations sign the Memory Preservation Accord, establishing the Mnemosynē Archive as a neutral, permanent institution.',
    color: '#34d399',
  },
  {
    year: '2063',
    title: 'Archive Opens',
    description: 'The first memories are submitted. Within six months, over one million stories have been preserved from 89 countries.',
    color: '#fbbf24',
  },
  {
    year: '2071',
    title: 'Global Expansion',
    description: 'The Archive reaches every inhabited region on Earth. Mobile collection units travel to remote communities. 847 languages supported.',
    color: '#67e8f9',
  },
  {
    year: '2089',
    title: 'Today',
    description: 'Over 4.7 million memories preserved. The archive will travel with humanity aboard the migration vessels, ensuring our stories survive the stars.',
    color: '#c084fc',
  },
]

const values = [
  {
    icon: Globe,
    title: 'Universal Inclusion',
    description: 'Every human story deserves preservation, regardless of language, culture, or circumstance. We actively seek out underrepresented voices.',
    color: '#34d399',
  },
  {
    icon: Shield,
    title: 'Ethical Preservation',
    description: 'All memories are submitted with full informed consent. Contributors retain ownership. Privacy is protected. Nothing is altered.',
    color: '#818cf8',
  },
  {
    icon: Heart,
    title: 'Emotional Integrity',
    description: 'We preserve memories as they were experienced — with all their complexity, contradiction, and humanity intact.',
    color: '#f472b6',
  },
  {
    icon: Star,
    title: 'Permanent Legacy',
    description: 'The archive is designed to survive the journey between stars. Multiple redundant copies will travel aboard every migration vessel.',
    color: '#fbbf24',
  },
]

const team = [
  { name: 'Dr. Amara Osei', role: 'Director General', region: 'West Africa' },
  { name: 'Prof. Hiroshi Yamamoto', role: 'Chief Archivist', region: 'East Asia' },
  { name: 'Dr. Elena Vasquez', role: 'Head of Ethics', region: 'South America' },
  { name: 'Yusuf Al-Rashid', role: 'Technology Director', region: 'Middle East' },
  { name: 'Dr. Priya Nair', role: 'Linguistics Lead', region: 'South Asia' },
  { name: 'Ingrid Lindqvist', role: 'Community Outreach', region: 'Northern Europe' },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20 star-bg">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 40% 40%, rgba(99,102,241,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(20,184,166,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-nebula-600/20 border border-nebula-500/30 flex items-center justify-center">
              <Archive className="w-5 h-5 text-nebula-300" />
            </div>
          </div>
          <p className="text-xs font-mono text-nebula-400 tracking-widest uppercase mb-4">
            Our Mission
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
            Before We Leave,{' '}
            <span className="text-gradient-nebula italic">We Remember</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-3xl mx-auto">
            In 2091, humanity will take its first steps toward another star. The Mnemosynē Archive
            exists to ensure that when we arrive, we remember who we were, where we came from,
            and what it meant to be human on the only world we have ever known.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 relative">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-3xl text-white font-semibold mb-6">
                  Why Memory Matters
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Memory is not merely the record of what happened. It is the substance of identity —
                    the thread that connects who we are to who we have been.
                  </p>
                  <p>
                    When a civilization migrates, it risks losing not just its physical home,
                    but the accumulated wisdom, grief, joy, and wonder of every generation
                    that came before.
                  </p>
                  <p>
                    The Mnemosynē Archive is our answer to that risk. We are building the most
                    comprehensive record of human experience ever assembled — not for historians,
                    but for the children who will grow up among the stars and wonder what Earth was like.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Memories Preserved', value: '4.7M+', color: '#818cf8' },
                  { label: 'Languages', value: '847', color: '#34d399' },
                  { label: 'Years of History', value: '50,000+', color: '#fbbf24' },
                  { label: 'Active Contributors', value: '2.8M', color: '#f472b6' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700/30"
                  >
                    <span className="text-slate-400 text-sm">{stat.label}</span>
                    <span className="font-display font-bold text-xl" style={{ color: stat.color }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-aurora-400 tracking-widest uppercase mb-3">
              Our History
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold">
              The Road to the Archive
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-nebula-500/50 via-nebula-500/20 to-transparent" />

            <div className="space-y-10">
              {timeline.map((event, i) => (
                <div
                  key={event.year}
                  className={`relative flex gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-cosmos mt-1.5"
                    style={{ backgroundColor: event.color }}
                  />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card rounded-xl p-5">
                      <span
                        className="text-xs font-mono font-bold tracking-widest uppercase mb-2 block"
                        style={{ color: event.color }}
                      >
                        {event.year}
                      </span>
                      <h3 className="font-display font-semibold text-white text-lg mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-memory-love tracking-widest uppercase mb-3">
              Our Principles
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="glass-card glass-card-hover rounded-2xl p-6 md:p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${value.color}18`, border: `1px solid ${value.color}30` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: value.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-mono text-stardust-400 tracking-widest uppercase mb-3">
              The People
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold">
              Global Leadership Council
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {team.map((member) => (
              <div key={member.name} className="glass-card rounded-xl p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-nebula-900/60 border border-nebula-500/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-5 h-5 text-nebula-400" />
                </div>
                <h4 className="font-display font-semibold text-white text-sm mb-1">
                  {member.name}
                </h4>
                <p className="text-nebula-300 text-xs mb-1">{member.role}</p>
                <p className="text-slate-500 text-xs font-mono">{member.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="glass-card rounded-3xl p-10 md:p-14">
            <h2 className="font-display text-3xl md:text-4xl text-white font-bold mb-6">
              Join the Archive
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Your story is part of humanity's story. Before we leave, let us remember together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contribute"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-nebula-600 hover:bg-nebula-500 text-white font-semibold transition-all duration-200 group"
              >
                Contribute a Memory
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/explore"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-nebula-500/40 text-nebula-200 hover:border-nebula-400 font-medium transition-all duration-200"
              >
                Explore the Archive
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
