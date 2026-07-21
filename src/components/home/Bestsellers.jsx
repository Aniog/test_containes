import { Link } from 'react-router-dom'
import { ProductCard } from '../products/ProductCard'
import { getBestsellers } from '../../data/products'

export function Bestsellers() {
  const bestsellers = getBestsellers()

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 text-sm tracking-extra-wide uppercase mb-2">
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-4">
            Our Bestsellers
          </h2>
          <p className="text-warmgray-500 max-w-xl mx-auto">
            Discover the pieces our customers keep coming back for. Each design blends timeless elegance with modern sensibility.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-charcoal-900 font-medium text-sm tracking-wide hover:text-gold-600 transition-colors group"
          >
            <span>View All Jewelry</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
