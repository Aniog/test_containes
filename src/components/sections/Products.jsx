import { Settings, Shield, Zap, Award } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'High-precision double folding system for complex metal sheet operations with automated controls.',
    features: ['Automated folding', 'High precision', 'Heavy-duty construction'],
    imgId: 'product-double-folding-x1y2z3',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for efficient sheet metal processing with dual-action capability.',
    features: ['Dual-action folding', 'Quick setup', 'Energy efficient'],
    imgId: 'product-double-folder-a4b5c6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder designed for consistent, high-quality bends.',
    features: ['Consistent results', 'Easy operation', 'Durable build'],
    imgId: 'product-sheet-metal-folder-d7e8f9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with CNC controls for precision sheet metal fabrication.',
    features: ['CNC controlled', 'Multi-axis folding', 'Smart diagnostics'],
    imgId: 'product-sheet-metal-folding-g1h2i3',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder engineered for demanding industrial applications.',
    features: ['Industrial grade', 'High capacity', 'Low maintenance'],
    imgId: 'product-metal-folder-j4k5l6',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folder machine solution with integrated safety features.',
    features: ['Safety integrated', 'User-friendly', 'Fast operation'],
    imgId: 'product-metal-folder-machine-m7n8o9',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Premium metal folding machine for precision manufacturing and fabrication.',
    features: ['Premium quality', 'Precision engineering', 'Long lifespan'],
    imgId: 'product-metal-folding-machine-p1q2r3',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          alt={product.title}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 id={product.titleId} className="text-xl font-display font-semibold text-brand-primary mb-2">
          {product.title}
        </h3>
        <p id={product.descId} className="text-gray-600 text-sm mb-4 text-body">
          {product.description}
        </p>
        
        <div className="space-y-2 mb-4">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              {feature}
            </div>
          ))}
        </div>
        
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-brand-accent font-medium text-sm hover:gap-3 transition-all"
        >
          Request Quote
          <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  )
}

const Products = () => {
  return (
    <section id="products" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-accent/10 text-brand-accent text-sm font-medium rounded-full mb-4">
            Our Products
          </span>
          <h2 id="products-title" className="heading-section text-4xl md:text-5xl text-brand-primary mb-4">
            Premium Folding Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-body">
            Discover our comprehensive range of metal folding machines designed for precision, efficiency, and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
