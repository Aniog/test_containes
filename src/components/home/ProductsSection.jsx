import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    description: 'PCBs, consumer electronics, cables, batteries, and semiconductors.',
  },
  {
    title: 'Machinery & Industrial Parts',
    description: ' CNC parts, molds, tools, pumps, valves, and automation equipment.',
  },
  {
    title: 'Home & Furniture',
    description: 'Furniture, lighting, kitchenware, bathroom fixtures, and decor.',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Garments, fabrics, bags, shoes, and accessories.',
  },
  {
    title: 'Packaging & Printing',
    description: 'Corrugated boxes, rigid boxes, labels, bags, and custom packaging.',
  },
  {
    title: 'Automotive & Hardware',
    description: 'Auto parts, fasteners, hardware, building materials, and fittings.',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-accent mb-3">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
            Products We Source
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We cover a wide range of product categories across South China manufacturing hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-surface rounded-xl border border-border-light p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-text-primary mb-2">{cat.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{cat.description}</p>
              <Link
                to="/products"
                className="inline-flex items-center text-sm font-semibold text-primary-accent group-hover:text-blue-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
