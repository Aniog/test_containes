import { Check, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Maximum Versatility',
    description:
      'Our flagship double folding machine delivers unmatched folding precision for sheet metal fabrication. Ideal for complex multi-bend profiles with rapid cycle times.',
    features: [
      'CNC-controlled dual folding beams',
      'Up to 4mm mild steel capacity',
      'Automatic tooling adjustment',
      'Touchscreen interface with job memory',
    ],
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Heavy-Duty Performance',
    description:
      'Purpose-built for high-volume production environments. This sheet metal folder handles the toughest jobs with repeatable accuracy and minimal setup time.',
    features: [
      'Hydraulic clamping system',
      'Bending length up to 3200mm',
      'Programmable back gauge',
      'Energy-efficient servo drive',
    ],
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Compact Precision',
    description:
      'A space-saving powerhouse designed for small to medium fabrication shops. The metal folding machine delivers industrial-grade results in a compact footprint.',
    features: [
      'Counter-balanced folding beam',
      'Up to 2.5mm stainless steel capacity',
      'Manual or semi-CNC control options',
      'Quick-change tooling system',
    ],
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-accent-gold text-sm font-medium uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-accent-gold" />
            Our Machines
          </span>
          <h2 className="font-[family-name:var(--font-family-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Engineered for Perfection
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Every ARTITECT machine is built with precision components, rigorous
            quality control, and a relentless commitment to excellence.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-brand-card border border-border-subtle rounded-2xl p-6 md:p-8 hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon area */}
              <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors">
                <span className="font-[family-name:var(--font-family-heading)] text-2xl font-bold text-accent-gold">
                  {product.id === 'double-folding-machine'
                    ? 'DF'
                    : product.id === 'sheet-metal-folder'
                      ? 'SF'
                      : 'MF'}
                </span>
              </div>

              <span className="text-accent-gold text-xs font-medium uppercase tracking-wider">
                {product.tagline}
              </span>
              <h3 className="font-[family-name:var(--font-family-heading)] text-xl md:text-2xl font-bold text-text-primary mt-2 mb-3">
                {product.name}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent-gold mt-0.5 shrink-0" />
                    <span className="text-text-secondary text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent-gold text-sm font-semibold hover:text-accent-gold-light transition-colors group/link"
              >
                Inquire About This Machine
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
