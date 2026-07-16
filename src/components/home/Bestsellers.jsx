import { Link } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-heading-lg text-warm-black">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-warm-black text-warm-black px-10 py-3 text-xs font-medium tracking-[0.12em] uppercase hover:bg-warm-black hover:text-white transition-all"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
