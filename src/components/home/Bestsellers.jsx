import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/shared/SectionTitle'
import ProductCard from '@/components/shared/ProductCard'
import { PRODUCTS } from '@/data/products'

export default function Bestsellers() {
  const items = PRODUCTS.slice(0, 5)
  return (
    <section className="py-20 lg:py-28 bg-ivory-50">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionTitle
            eyebrow="Bestsellers"
            title="Loved by the women who never take it off."
            align="left"
          />
          <Link
            to="/shop"
            className="self-start lg:self-end inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-900 border-b border-ink-900/30 hover:border-ink-900 pb-1"
          >
            Shop all
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
