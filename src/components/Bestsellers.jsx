import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.bestseller)

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-light">
            Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-gold transition-colors tracking-wider uppercase group"
          >
            View All Jewelry
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
