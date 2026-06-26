import { Cog, Gauge, Shield, Wrench } from 'lucide-react'

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    desc: 'CNC-machined components ensure consistent, accurate folds every time.',
  },
  {
    icon: Gauge,
    title: 'High Efficiency',
    desc: 'Automated folding cycles boost productivity and reduce labor costs.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-duty steel construction for decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    desc: 'User-serviceable design with accessible parts and clear documentation.',
  },
]

export default function FeatureCards() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Choose Our Machinery
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Every machine is designed with the operator in mind, combining industrial strength with intuitive controls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg rounded-xl p-6 border border-border hover:shadow-md hover:border-gold/30 transition-all group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
