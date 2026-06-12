import React from 'react'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding system for complex sheet metal operations with automated angle control.',
    features: ['Automated angle control', 'Heavy-duty construction', 'Precision ±0.1mm'],
    imgId: 'product-dfm-8a9b0c',
    titleId: 'product-dfm-title',
    descId: 'product-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for efficient bending and folding of various metal sheet thicknesses.',
    features: ['Multi-angle capability', 'Quick setup', 'Durable blades'],
    imgId: 'product-df-1d2e3f',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder designed for consistent, repeatable folding operations.',
    features: ['Consistent results', 'Easy operation', 'Low maintenance'],
    imgId: 'product-smf-4g5h6i',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with digital controls for precise sheet metal fabrication workflows.',
    features: ['Digital controls', 'High throughput', 'Safety certified'],
    imgId: 'product-smfm-7j8k9l',
    titleId: 'product-smfm-title',
    descId: 'product-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Compact and efficient metal folder ideal for small to medium production runs.',
    features: ['Space-saving design', 'Quick changeover', 'Precision guides'],
    imgId: 'product-mf-0m1n2o',
    titleId: 'product-mf-title',
    descId: 'product-mf-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Industrial metal folding machine built for demanding production environments.',
    features: ['Heavy-duty frame', 'High capacity', 'Long service life'],
    imgId: 'product-mfm-3p4q5r',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
  },
]

const ProductCard = ({ product }) => (
  <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
      <img
        alt={product.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
    <div className="p-6">
      <h3 id={product.titleId} className="text-lg font-semibold text-slate-900 mb-2">
        {product.title}
      </h3>
      <p id={product.descId} className="text-slate-600 text-sm leading-relaxed mb-4">
        {product.description}
      </p>
      <ul className="space-y-2 mb-4">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors"
      >
        Request Quote
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </div>
)

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Our Products
          </p>
          <h2 id="products-title" className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Precision Folding Solutions
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Explore our comprehensive range of sheet metal folding machines, engineered for 
            accuracy, durability, and optimal performance in industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
