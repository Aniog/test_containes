import { Target, Eye, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To democratize professional web presence — making it possible for any individual or business to have a world-class website, regardless of technical skill or budget.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A world where the barrier between an idea and a live, impactful website is measured in minutes, not months. AI as the great equalizer of the digital economy.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'We believe in radical transparency, human-centered AI, and building tools that genuinely empower people — not just impress them.',
  },
]

const team = [
  {
    name: 'Elena Vasquez',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80&auto=format&fit=crop&crop=face',
  },
  {
    name: 'James Park',
    role: 'CTO & Co-founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80&auto=format&fit=crop&crop=face',
  },
  {
    name: 'Aisha Okonkwo',
    role: 'Head of AI Research',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80&auto=format&fit=crop&crop=face',
  },
  {
    name: 'Tom Lindqvist',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80&auto=format&fit=crop&crop=face',
  },
]

export default function BrandVision() {
  return (
    <>
      {/* Vision section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 right-0 border-t border-dashed border-slate-200" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                We're building the future<br />of the web, together
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6">
                Founded in 2023, NexusAI was born from a simple frustration: building a great website was still too hard, too slow, and too expensive for most people.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                We assembled a team of AI researchers, designers, and engineers with one shared obsession — making professional web presence accessible to everyone.
              </p>
            </div>
            <div className="relative">
              <div className="dashed-border rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                  alt="Modern minimalist workspace"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-indigo-600 text-white rounded-2xl p-5 hidden md:block">
                <p className="text-3xl font-black">2023</p>
                <p className="text-indigo-200 text-xs font-medium">Founded</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-dashed border-slate-200">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              The minds behind NexusAI
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map(({ name, role, image }) => (
              <div key={name} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                <p className="text-xs text-slate-500 mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '48K+', label: 'Sites Built' },
              { value: '12K+', label: 'Happy Customers' },
              { value: '40+', label: 'Languages' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-black text-white">{value}</p>
                <p className="text-indigo-200 text-sm font-medium mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
