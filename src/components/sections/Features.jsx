import { Settings, Shield, Zap, Award, Clock, Headphones } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'CNC-controlled systems deliver consistent, accurate bends with tolerances as tight as 0.1mm.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty construction and premium components ensure years of reliable industrial operation.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized cycle times and rapid setup capabilities maximize your production throughput.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'All machines meet international quality standards and undergo rigorous testing before delivery.',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Intuitive controls and tooling systems minimize changeover time between different jobs.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated technical support team available for installation, training, and ongoing assistance.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Engineered for Excellence
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Every ARTITECT machine is designed with your productivity and success in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
