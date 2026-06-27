import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { products } from '@/data/products'

const Bestsellers = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-text">Bestsellers</h2>
          <p className="mt-2 text-sm text-text-muted">Our most-loved pieces, chosen by you</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-text text-text text-xs font-medium uppercase tracking-product rounded-sm hover:bg-text hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
