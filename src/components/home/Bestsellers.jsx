import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.tags.includes('bestseller'))

  return (
    <section className="py-20 lg:py-28 bg-ivory-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-manrope text-xs tracking-widest uppercase text-gold-dust mb-3">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-muted hover:text-gold-dust transition-colors duration-300 group"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-manrope text-xs tracking-widest uppercase border border-gold-dust text-gold-dust px-8 py-3.5 hover:bg-gold-dust hover:text-obsidian transition-all duration-300"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
