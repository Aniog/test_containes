import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    description: 'High-capacity double folding system for complex sheet metal operations with precision control.',
    imageId: 'product-double-folding-machine-a1b2c3',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    description: 'Versatile folding solution for various sheet metal thicknesses and applications.',
    imageId: 'product-sheet-metal-folder-d4e5f6',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    description: 'Industrial-grade metal folder designed for heavy-duty fabrication tasks.',
    imageId: 'product-metal-folding-machine-g7h8i9',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              Explore our range of precision folding machines designed for professional metal fabrication.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-slate-900 font-semibold mt-4 md:mt-0 hover:text-amber-600 transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products#${product.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 id={product.titleId} className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-slate-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
