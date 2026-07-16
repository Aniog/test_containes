import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
          The pieces our community reaches for again and again — refined gold,
          made to be lived in.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-ink transition-colors hover:text-gold"
        >
          View All Products
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  )
}
