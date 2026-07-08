import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-medium">
            Bestsellers
          </h2>
          <p className="mt-3 text-stone text-sm">The pieces our community can't stop wearing.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-gold text-gold text-sm font-medium uppercase tracking-product hover:bg-gold hover:text-cream transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
