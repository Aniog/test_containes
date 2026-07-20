import { Link } from 'react-router-dom'
import { products } from '@/lib/data'
import ProductCard from '../ProductCard'

const Bestsellers = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="font-sans text-sm text-muted">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-sans text-sm uppercase tracking-wider px-8 py-3 hover:bg-gold hover:text-white transition-all duration-300 no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
