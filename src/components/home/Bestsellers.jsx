import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">Bestsellers</h2>
          <p className="mt-3 text-muted-fg font-sans text-sm sm:text-base">Our most-loved pieces, chosen by you.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-cream px-8 py-3 font-sans text-sm font-medium uppercase tracking-button transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
