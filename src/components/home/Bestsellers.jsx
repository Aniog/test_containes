import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-10 flex flex-col gap-5 border-b border-velmora-line pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Most loved</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em] text-velmora-espresso sm:text-5xl">Bestsellers</h2>
        </div>
        <Link to="/shop" className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso">
          View all pieces
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
