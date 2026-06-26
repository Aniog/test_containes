import { Shield, Cpu, Zap, Settings } from 'lucide-react'

const products = [
  {
    title: 'Double Folding Machine',
    subtitle: 'DF-2000 Series',
    description: 'Our flagship double folding machine engineered for high-volume production. Simultaneous dual-edge folding doubles throughput while maintaining micron-level precision.',
    features: ['Dual-edge simultaneous folding', 'CNC programmable controls', 'Up to 12 ft material width', 'Auto thickness compensation'],
    icon: Settings,
  },
  {
    title: 'Double Folder',
    subtitle: 'DF-3000 Series',
    description: 'Advanced double folder designed for complex multi-bend operations. Ideal for HVAC, automotive, and architectural sheet metal fabrication.',
    features: ['Multi-angle programmable bends', 'Servo-electric precision drives', 'Touchscreen HMI interface', 'Quick-change tooling system'],
    icon: Cpu,
  },
  {
    title: 'Sheet Metal Folder',
    subtitle: 'SF-1500 Series',
    description: 'Versatile sheet metal folder offering exceptional control for custom fabrication shops. Handles everything from thin gauge to heavy plate with ease.',
    features: ['Variable speed folding action', 'Digital backgauge positioning', 'Overload protection system', 'Compact footprint design'],
    icon: Zap,
  },
  {
    title: 'Metal Folding Machine',
    subtitle: 'MF-5000 Series',
    description: 'Heavy-duty metal folding machine built for industrial continuous operation. Reinforced frame and hydraulic system deliver consistent results under maximum load.',
    features: ['Hydraulic folding action', 'Reinforced steel frame', 'Emergency stop safety system', 'Remote diagnostics capability'],
    icon: Shield,
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Our Product Line</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-4">
            Premium Metal Folding Solutions
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From compact sheet metal folders to industrial double folding machines,
            each system is precision-engineered for reliability and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <article
                key={product.title}
                className="bg-card border border-slate-100 rounded-xl p-6 md:p-8 hover:shadow-lg hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs text-gold font-semibold uppercase tracking-wider">{product.subtitle}</span>
                    <h3 className="text-xl font-bold text-navy-900 mt-0.5">{product.title}</h3>
                  </div>
                </div>

                <p className="text-slate-500 mb-5 leading-relaxed">{product.description}</p>

                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}