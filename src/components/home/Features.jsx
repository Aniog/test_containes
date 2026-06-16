import { Shield, Gauge, Wrench, Cpu, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description: 'Achieve ±0.1mm accuracy on every fold with our advanced CNC-controlled systems.',
  },
  {
    icon: Zap,
    title: 'High-Speed Production',
    description: 'Maximize throughput with rapid cycle times and automated material handling.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction and premium components ensure decades of reliable operation.',
  },
  {
    icon: Cpu,
    title: 'Smart Controls',
    description: 'Intuitive touch-screen HMI with programmable bend sequences and real-time diagnostics.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with quick-access panels reduces downtime and simplifies servicing.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Worldwide service network with 24/7 technical support and rapid spare parts delivery.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-amber font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mt-3">
            Engineered for Excellence
          </h2>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
            Every machine we build reflects our commitment to quality, innovation, and customer success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 lg:p-8 rounded-2xl border border-slate-100 hover:border-brand-amber/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-amber/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-amber/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-amber" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
