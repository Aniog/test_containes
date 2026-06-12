import { Shield, Gauge, Wrench, Cpu, Globe, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'High Precision',
    description: 'Achieve ±0.1mm bending accuracy with our advanced servo-electric drive systems and CNC controls.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction with hardened tooling ensures decades of reliable operation.',
  },
  {
    icon: Cpu,
    title: 'Smart Controls',
    description: 'Intuitive touchscreen HMI with programmable sequences, angle memory, and real-time diagnostics.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Modular design with quick-access panels and self-lubricating components minimize downtime.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'CE certified, ISO 9001 compliant manufacturing with worldwide safety certifications.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Dedicated technical team providing installation, training, and 24/7 remote assistance.',
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Engineering Excellence
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every machine we build reflects our commitment to quality,
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-gold/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
