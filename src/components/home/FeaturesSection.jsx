import { Shield, Cpu, Gauge, Wrench, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with industrial-grade components. Every machine is built for decades of reliable operation.',
  },
  {
    icon: Cpu,
    title: 'CNC Precision',
    description: 'Advanced CNC control systems deliver repeatable accuracy within 0.01mm tolerance for the most demanding applications.',
  },
  {
    icon: Gauge,
    title: 'High Performance',
    description: 'Optimized hydraulic systems and fast cycle times maximize your production throughput without sacrificing quality.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible components simplifies routine maintenance and reduces downtime.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Smart power management and efficient drive systems reduce energy consumption by up to 30% compared to conventional machines.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Worldwide service network with 24/7 technical support, spare parts availability, and on-site training programs.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-steel-900 mt-4 mb-6">
            The ARTITECT{' '}
            <span className="text-brand-500">Advantage</span>
          </h2>
          <p className="text-steel-500 text-lg leading-relaxed">
            Our machines are designed with the operator in mind, combining cutting-edge
            technology with rugged industrial durability.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-steel-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-steel-900 mb-3">{feature.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
