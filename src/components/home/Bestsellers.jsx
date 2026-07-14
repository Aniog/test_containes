import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-cream px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Most loved</p>
            <h2 className="mt-3 font-serif text-5xl font-medium tracking-tight md:text-7xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="w-fit border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-bronze">View all pieces</Link>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  )
}
