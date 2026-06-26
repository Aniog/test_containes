import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-axis folding system for complex sheet metal operations with repeatable accuracy.',
    features: ['Dual synchronized folding beams', 'CNC-controlled precision', 'Multi-angle capability'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder designed for medium to high volume production environments.',
    features: ['Rapid tool changeover', 'Adjustable clamping system', 'Touchscreen HMI control'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'General-purpose sheet metal folder offering exceptional value and reliability for standard applications.',
    features: ['Robust construction', 'Easy operation interface', 'Low maintenance design'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with programmable backgauge for complex geometries.',
    features: ['Programmable backgauge', 'Multiple bending sequences', 'Memory storage for jobs'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Compact metal folder solution ideal for workshops with space constraints.',
    features: ['Space-efficient footprint', 'Full folding capacity', 'Quick setup adjustments'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Heavy-duty metal folder machine built for industrial-grade production demands.',
    features: ['Industrial-grade components', 'High throughput capacity', 'Extended tool life'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium metal folding machine with advanced safety features and operator comfort.',
    features: ['Enhanced safety guarding', 'Ergonomic controls', 'Energy-efficient operation'],
  },
]

const Products = () => {
  return (
    <section id="products" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our Product Range
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From compact folders to heavy-duty double folding machines, we offer 
            comprehensive solutions for every sheet metal folding requirement.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="aspect-video bg-slate-50 rounded-lg mb-5 overflow-hidden">
                <img
                  data-strk-img-id={`product-img-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <h3 id={`product-title-${product.id}`} className="text-xl font-semibold text-slate-900 mb-2">
                {product.title}
              </h3>
              <p id={`product-desc-${product.id}`} className="text-slate-600 text-sm leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
