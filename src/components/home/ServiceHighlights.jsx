import { Shield, Zap, BarChart3, Layers, Code2, Globe } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'AI-powered site creation that produces production-ready code in under a minute.',
    tag: 'Core',
  },
  {
    icon: Layers,
    title: 'Smart Templates',
    description: 'Hundreds of industry-specific templates that adapt to your brand automatically.',
    tag: 'Design',
  },
  {
    icon: Code2,
    title: 'Clean Code Export',
    description: 'Export your site as clean HTML, CSS, and JavaScript. Own your code completely.',
    tag: 'Developer',
  },
  {
    icon: BarChart3,
    title: 'Built-in Analytics',
    description: 'Track visitors, conversions, and performance without third-party tools.',
    tag: 'Growth',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant infrastructure with automatic SSL and DDoS protection.',
    tag: 'Security',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Your site loads fast everywhere with our 200+ edge locations worldwide.',
    tag: 'Performance',
  },
]

export default function ServiceHighlights() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Everything you need
              <br />
              <span className="text-white/30">to go live.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            AetherAI is a complete platform — from design to deployment, every tool is built in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group relative p-6 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Dashed corner accent */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-dashed border-white/10 rounded-tr-sm" />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <Icon className="w-5 h-5 text-white/60" />
                  </div>
                  <span className="text-xs text-white/30 border border-white/10 rounded-full px-2 py-0.5">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
