import { 
  Ruler, 
  Factory, 
  Cpu, 
  ShieldCheck, 
  Wrench, 
  Globe,
  ArrowUpRight
} from 'lucide-react'

const features = [
  {
    icon: Ruler,
    title: 'Sub-Millimeter Accuracy',
    description: 'Every double folding machine is calibrated to deliver ±0.1mm repeat positioning. Your folds stay precise, batch after batch.',
  },
  {
    icon: Factory,
    title: 'Industrial-Grade Construction',
    description: 'Welded steel frames and hardened tooling ensure our sheet metal folders withstand the most demanding production environments.',
  },
  {
    icon: Cpu,
    title: 'Smart Control Systems',
    description: 'Intuitive touchscreen interfaces with programmable fold sequences. Reduce setup time and operator training requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last Decades',
    description: 'Every metal folder machine is designed for a 20+ year service life with minimal maintenance and maximum uptime.',
  },
  {
    icon: Wrench,
    title: 'Rapid Tool Changes',
    description: 'Quick-change tooling systems minimize downtime between jobs. Switch between profiles in minutes, not hours.',
  },
  {
    icon: Globe,
    title: 'Global Support Network',
    description: 'Our service team operates across 40+ countries. Remote diagnostics and on-site support keep your production running.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-surface-dark to-brand-900" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Why Choose ARTITECT
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
            Engineered for Excellence
          </h2>
          <p className="text-steel-400 mt-4 text-lg">
            Every feature of our folding machines is designed to deliver superior
            performance, reliability, and return on investment.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-sm bg-surface-card border border-steel-700/30 hover:border-accent-500/20 hover:bg-surface-elevated transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent-500/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-steel-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-accent-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '99.7%', label: 'Fold Accuracy Rate' },
            { value: '< 2hr', label: 'Average Setup Time' },
            { value: '20yr', label: 'Machine Lifespan' },
            { value: '24/7', label: 'Technical Support' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-sm bg-surface-card border border-steel-700/30"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-accent-400">
                {stat.value}
              </div>
              <div className="text-steel-400 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
