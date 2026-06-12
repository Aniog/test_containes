import { Gauge, Shield, Zap, Wrench, Globe, Headphones } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'High Precision',
    description: 'CNC-controlled folding beams deliver repeatable accuracy within ±0.1mm across the full working length.',
  },
  {
    icon: Zap,
    title: 'Fast Cycle Times',
    description: 'Servo-electric drives and optimized motion profiles reduce cycle times by up to 40% versus conventional machines.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-gauge steel frames, hardened tooling, and premium components ensure decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Easy Setup',
    description: 'Intuitive touchscreen controls and quick-change tooling let operators switch jobs in minutes, not hours.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Our worldwide network of service engineers provides installation, training, and ongoing maintenance support.',
  },
  {
    icon: Headphones,
    title: '24/7 Service',
    description: 'Round-the-clock technical support with remote diagnostics keeps your production running without interruption.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28" style={{ backgroundColor: '#0F1B2D' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: '#C8A45C' }}>
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Engineering Excellence
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Every machine we build reflects our commitment to quality,
            performance, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-xl p-6 md:p-8 border border-white/5 hover:border-amber-400/30 transition-colors duration-300"
                style={{ backgroundColor: '#1A2B42' }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(200, 164, 92, 0.1)' }}>
                  <Icon className="w-6 h-6" style={{ color: '#C8A45C' }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
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
