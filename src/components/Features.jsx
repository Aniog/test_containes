import { Shield, Zap, Target, Settings, Wrench, Headphones } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Unmatched Precision',
    description: 'Every double folding machine is engineered to deliver accuracy within 0.01mm, ensuring consistent bends across your entire production run.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel frames and premium hydraulic components mean our machines run reliably for decades with minimal maintenance.',
  },
  {
    icon: Zap,
    title: 'Fast Setup Times',
    description: 'Quick-change tooling systems and intuitive CNC controls reduce setup time from hours to minutes, maximizing your productivity.',
  },
  {
    icon: Settings,
    title: 'Flexible Configuration',
    description: 'Each metal folding machine can be customized with optional back gauges, CNC controls, and specialized tooling for your specific needs.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Designed with serviceability in mind. Accessible components and clear diagnostic systems keep downtime to an absolute minimum.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Our team of experienced engineers provides installation, training, and ongoing technical support for every machine we sell.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-brand-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-400 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Engineered for{' '}
            <span className="text-accent-400">Performance</span>
          </h2>
          <p className="text-brand-300 text-lg mt-4 max-w-2xl mx-auto">
            Every sheet metal folder we build combines cutting-edge technology with 
            decades of manufacturing expertise to deliver exceptional results.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-7 hover:bg-white/10 hover:border-accent-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-brand-300 leading-relaxed text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent-500/20"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  )
}

export default Features
