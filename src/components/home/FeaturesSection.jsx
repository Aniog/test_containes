import { Shield, Gauge, Wrench, Award } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'High Precision',
    description: 'Achieve tolerances within ±0.1mm with our advanced folding technology and digital angle control.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with hardened tooling ensures decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Operation',
    description: 'Intuitive controls and quick-change tooling systems minimize setup time and training requirements.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'All machines meet ISO 9001 standards with CE marking and comprehensive safety features.',
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-4">
            Why Choose Artitect Machinery
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Over 25 years of engineering excellence in sheet metal folding technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="text-center p-6 lg:p-8 rounded-xl border border-slate-100 hover:border-amber-200 hover:shadow-sm transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-50 rounded-xl mb-5">
                  <Icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
