import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { ArrowRight } from 'lucide-react'

export default function FeaturedProducts() {
  const featured = products.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-xs font-semibold tracking-wider uppercase">Our Products</span>
          <h2 id="featured-title" className="text-3xl md:text-4xl font-bold text-brand-900 mt-3">
            Machines Built for Performance
          </h2>
          <p className="text-steel-500 mt-4 max-w-2xl mx-auto">
            From compact workshop folders to heavy-duty production double folders, every ARTITECT machine is engineered for precision and durability.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="group bg-steel-50 rounded-2xl overflow-hidden border border-steel-200 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-900/5"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-steel-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-brand-200/50 flex items-center justify-center mx-auto mb-3">
                      <span className="text-brand-600 text-xl font-bold">AM</span>
                    </div>
                    <span className="text-brand-500 text-sm font-medium">{product.category}</span>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-accent font-semibold tracking-wider uppercase mb-2">
                  {product.category}
                </div>
                <h3 className="text-lg font-semibold text-brand-900 group-hover:text-accent transition-colors duration-200 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-steel-500 leading-relaxed mb-4">
                  {product.tagline}
                </p>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white font-semibold rounded-lg text-sm transition-all duration-200"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
