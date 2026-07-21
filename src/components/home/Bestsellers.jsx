import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import useStockImages from '@/lib/useStockImages'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  const ref = useRef(null)
  useStockImages(ref, [])

  const bestsellers = PRODUCTS.slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container-x">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">Most loved</p>
            <h2
              id="bestsellers-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso"
              style={{ fontWeight: 400 }}
            >
              Our <span className="italic text-gold">bestsellers</span>
            </h2>
            <p id="bestsellers-subtitle" className="mt-3 text-sm text-muted max-w-md">
              The pieces our community reaches for again and again — the foundation of an everyday jewelry ritual.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest-2 text-ink hover:text-gold transition-colors duration-300"
          >
            Shop All
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 3} />
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link to="/shop" className="btn-ghost">
            Shop All
          </Link>
        </div>
      </div>
    </section>
  )
}
