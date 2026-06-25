import { Shield, Gauge, Wrench, Cpu, Zap, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with precision-machined components ensures decades of reliable operation.',
  },
  {
    icon: Gauge,
    title: 'Unmatched Precision',
    description: 'Achieve tolerances within ±0.1mm with our advanced CNC-controlled folding systems.',
  },
  {
    icon: Cpu,
    title: 'Smart Controls',
    description: 'Intuitive touch-screen interfaces with programmable sequences for effortless operation.',
  },
  {
    icon: Zap,
    title: 'High Productivity',
    description: 'Rapid cycle times and quick tool changes maximize your throughput and minimize downtime.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with accessible components makes routine maintenance simple and fast.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'All machines meet CE, ISO 9001, and international safety standards for peace of mind.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-text tracking-tight mb-4">
            Engineering Excellence
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every machine we build reflects our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 lg:p-8 rounded-xl border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">
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
