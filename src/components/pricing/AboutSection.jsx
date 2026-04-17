import { Target, Eye, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To democratize web creation by making professional, AI-powered websites accessible to every business — regardless of technical skill or budget.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A world where every idea can be expressed online instantly. Where the gap between imagination and execution is measured in minutes, not months.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'We believe in radical simplicity, relentless quality, and building technology that genuinely serves people — not the other way around.',
  },
]

const team = [
  {
    name: 'Alexandra Moore',
    role: 'CEO & Co-founder',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'CTO & Co-founder',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of AI Research',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop&crop=face',
  },
  {
    name: 'James Okafor',
    role: 'Head of Design',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop&crop=face',
  },
]

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Dashed accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Brand story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">About NexusAI</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              We're building the future<br />of the web
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              Founded in 2023, NexusAI was born from a simple frustration: building a great website still took too long, cost too much, and required too many specialists.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              We set out to change that. By combining the latest advances in large language models with deep expertise in web design and UX, we've created a platform that makes professional web creation instant and accessible.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: '2023', label: 'Founded' },
                { value: '48', label: 'Team members' },
                { value: '$12M', label: 'Series A raised' },
              ].map(({ value, label }) => (
                <div key={label} className="border-l border-dashed border-gray-700 pl-4">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-dashed border-gray-700 rounded-3xl pointer-events-none" />
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80&auto=format&fit=crop"
                alt="NexusAI team"
                className="w-full h-72 object-cover opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center mb-10">What drives us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">Meet the team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map(({ name, role, avatar }) => (
              <div key={name} className="text-center group">
                <div className="relative inline-block mb-3">
                  <div className="absolute -inset-1 border border-dashed border-gray-700 rounded-full group-hover:border-indigo-500/50 transition-colors" />
                  <img
                    src={avatar}
                    alt={name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-800"
                  />
                </div>
                <p className="text-white font-medium text-sm">{name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
