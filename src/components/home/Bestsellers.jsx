import { Link } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          <p className="mt-2 text-taupe text-sm">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-gold text-gold text-sm uppercase tracking-wider font-medium hover:bg-gold hover:text-cream transition-all duration-300 no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
