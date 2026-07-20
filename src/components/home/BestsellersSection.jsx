import { Link } from 'react-router-dom'
import { products } from '../../lib/products'
import ProductGrid from '../products/ProductGrid'

export default function BestsellersSection() {
  return (
    <section className="section-padding page-shell">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Bestsellers</p>
          <h2 id="bestsellers-title" className="mt-4 editorial-heading">
            The pieces our customers return to again and again
          </h2>
        </div>
        <Link to="/shop" className="text-sm uppercase tracking-widest text-rosewood transition hover:text-ink">
          Shop all jewelry
        </Link>
      </div>

      <ProductGrid
        className="mt-10 sm:grid-cols-2 xl:grid-cols-5"
        contextKey="bestsellers"
        products={products}
        sectionTitleId="bestsellers-title"
      />
    </section>
  )
}
