import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products'

export default function BestsellersSection() {
  return (
    <section className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-clay">Most loved</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl font-medium text-velmora-ink md:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink underline decoration-velmora-gold underline-offset-8 transition hover:text-velmora-clay">
            View all jewelry
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} contextId="bestsellers-title" />
          ))}
        </div>
      </div>
    </section>
  )
}
