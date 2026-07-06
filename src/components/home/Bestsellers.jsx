import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          <p className="mt-3 text-sm text-stone font-light">Our most-loved pieces, chosen by you</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            to="/collection"
            className="inline-block border border-charcoal text-charcoal px-8 py-3 text-xs font-medium tracking-wider hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  )
}
