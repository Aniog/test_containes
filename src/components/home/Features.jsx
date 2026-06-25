import { Gauge, Cog, ShieldCheck, Wrench, BarChart3, Headphones } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'High-Speed Operation',
    description: 'Achieve up to 20 bends per minute with our servo-driven folding systems for maximum throughput.',
  },
  {
    icon: Cog,
    title: 'CNC Precision Control',
    description: 'Programmable bending angles with ±0.1° accuracy ensure consistent results across every production run.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with hardened tooling delivers decades of reliable performance.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with quick-access panels makes routine maintenance fast and straightforward.',
  },
  {
    icon: BarChart3,
    title: 'Smart Diagnostics',
    description: 'Integrated monitoring systems provide real-time performance data and predictive maintenance alerts.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Our engineering team provides installation, training, and ongoing technical support worldwide.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <div className="h-px w-8 bg-brand-accent" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark-text tracking-tight">
            Engineering Excellence
          </h2>
          <p className="mt-4 text-brand-gray text-lg max-w-2xl mx-auto">
            Every machine is designed with precision engineering and built with premium materials for uncompromising quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 lg:p-8 rounded-xl border border-gray-100 hover:border-brand-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
