import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Shield, Zap, Wrench } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    name: 'Double Folding Machine',
    tagline: 'Precision bi-directional folding',
    description: 'Our flagship double folding machine delivers simultaneous folds on both edges of sheet metal, dramatically reducing cycle time while maintaining exceptional accuracy.',
    icon: Settings,
    features: ['Bidirectional folding', 'CNC-controlled precision', 'Up to 3mm mild steel capacity'],
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile single-edge folding',
    description: 'A robust and reliable sheet metal folder designed for workshops of all sizes. Ideal for HVAC, roofing, and general fabrication with quick setup and consistent results.',
    icon: Wrench,
    features: ['Manual & CNC options', 'Fold lengths up to 4m', 'Quick-change tooling system'],
  },
  {
    id: 'metal-folding',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-duty industrial folding',
    description: 'Engineered for high-volume production environments, our metal folding machines handle the toughest jobs with precision and speed — day in, day out.',
    icon: Zap,
    features: ['High-speed operation', 'Automated back gauge', 'Heavy plate capacity'],
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Machinery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3 mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover our range of precision sheet metal folding solutions, each built to the highest standards of industrial manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {product.tagline}
                </span>
                <h3 className="text-xl font-bold text-text-primary mt-2 mb-3">
                  {product.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-colors duration-200"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}