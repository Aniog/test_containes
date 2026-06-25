import { Shield, Gauge, Wrench, Headphones, Award, Zap } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Unmatched Precision',
    description: 'CNC-controlled folding with ±0.1mm accuracy ensures every bend meets exact specifications.',
  },
  {
    icon: Zap,
    title: 'High-Speed Production',
    description: 'Optimized cycle times and automated sequences keep your production line running at peak efficiency.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel frames and premium components deliver decades of reliable, maintenance-free operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Operation',
    description: 'Intuitive touchscreen controls and quick-change tooling minimize setup time and operator training.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'All machines meet CE, ISO 9001, and international safety standards for worry-free compliance.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical support team available for installation, training, and ongoing maintenance.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Engineering Excellence
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Every Artitect machine is designed with precision, durability, and ease of use at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
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
