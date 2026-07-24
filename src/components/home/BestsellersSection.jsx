import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'

export default function BestsellersSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Most loved"
        title="The Bestsellers"
        sub="Five pieces our community reaches for again and again — worn daily, gifted often."
      />
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-14 lg:grid-cols-5 lg:gap-x-7">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="reveal mt-12 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
        >
          View all pieces
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  )
}
