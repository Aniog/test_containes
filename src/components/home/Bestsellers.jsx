import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'

const Bestsellers = ({ products }) => {
  const bestsellerProducts = products.slice(0, 5)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-light tracking-wide font-serif text-gray-900 mb-2">
          Bestsellers
        </h2>
        <div className="w-16 h-px bg-amber-700 mx-auto" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {bestsellerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm tracking-[0.2em] uppercase font-light hover:bg-gray-900 hover:text-white transition-colors"
        >
          View All
        </Link>
      </div>
    </section>
  )
}

export default Bestsellers
