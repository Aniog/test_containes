import { ArrowRight, Settings, Shield, Zap } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'High-precision double folding system for complex sheet metal operations with automated angle control.',
    features: ['Automated angle control', 'Dual-side folding', 'Precision ±0.1mm'],
    imgId: 'product-double-folding-x1y2z3',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folding solution for various sheet metal thicknesses with quick-change tooling system.',
    features: ['Quick-change tooling', 'Multi-thickness capacity', 'Easy operation'],
    imgId: 'product-sheet-metal-a4b5c6',
    titleId: 'product-sheet-metal-title',
    descId: 'product-sheet-metal-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Heavy-duty metal folding machine designed for industrial applications and high-volume production.',
    features: ['Heavy-duty construction', 'High-volume output', 'Industrial grade'],
    imgId: 'product-metal-folding-d7e8f9',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact double folder for precise bending operations in limited workspace environments.',
    features: ['Compact design', 'Space efficient', 'Precision bending'],
    imgId: 'product-double-folder-g1h2i3',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
]

const Products = () => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Precision Folding Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            Engineered for excellence, our machines deliver consistent results
            across all metal folding applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-600 mb-4 leading-relaxed"
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
