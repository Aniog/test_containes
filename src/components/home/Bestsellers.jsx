import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section className="bg-velmora-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors group"
          >
            View All
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
