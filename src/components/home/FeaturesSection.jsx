import { Shield, Gauge, Wrench, Headphones, Award, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with precision-machined components ensures decades of reliable operation.',
  },
  {
    icon: Gauge,
    title: 'Unmatched Precision',
    description: 'Tolerances within ±0.1mm across the full bending length for consistently accurate results.',
  },
  {
    icon: Zap,
    title: 'High Productivity',
    description: 'Rapid cycle times and automated features maximize throughput without sacrificing quality.',
  },
  {
    icon: Wrench,
    title: 'Easy Operation',
    description: 'Intuitive touch-screen controls and quick-change tooling minimize setup time and training.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'CE marked and ISO 9001 certified manufacturing processes guarantee international quality standards.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical support team with remote diagnostics and on-site service available worldwide.',
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-copper font-medium text-sm tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Engineering Excellence
          </h2>
          <p className="text-text-medium text-lg max-w-2xl mx-auto">
            Every Artitect machine is designed with the operator in mind — combining 
            industrial strength with intuitive usability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 md:p-8 rounded-2xl border border-border hover:border-copper/30 hover:shadow-lg transition-all duration-300 bg-surface"
              >
                <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-semibold text-lg text-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-medium text-sm leading-relaxed">
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

export default FeaturesSection
