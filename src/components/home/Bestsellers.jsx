import { Link } from 'react-router-dom'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

const bestsellers = products.slice(0, 5)

export default function Bestsellers() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold-600 font-medium mb-2">Most Loved</p>
          <h2 className="font-serif text-2xl md:text-3xl text-velvet-950 tracking-wide">Bestsellers</h2>
        </div>
        <Link
          to="/shop"
          className="hidden sm:inline-block text-xs tracking-[0.1em] uppercase font-semibold text-velvet-600 hover:text-gold-600 transition-colors underline underline-offset-4"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="sm:hidden mt-8 text-center">
        <Link
          to="/shop"
          className="inline-block text-xs tracking-[0.1em] uppercase font-semibold text-velvet-600 hover:text-gold-600 transition-colors underline underline-offset-4"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
