import { Link } from 'react-router-dom'
import ProductCard from '../product/ProductCard'
import SectionHeader from './SectionHeader'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section className="bg-velmora-ivory px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Bestsellers" title="Most Gifted, Most Worn" id="bestsellers-title">
            Pieces loved for their polish, comfort, and effortless glow.
          </SectionHeader>
          <Link to="/shop" className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-oxblood underline decoration-velmora-champagne underline-offset-8 transition hover:text-velmora-espresso">
            View all jewelry
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <div key={product.id} className={index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <ProductCard product={product} onAddToCart={onAddToCart} contextQuery="[bestsellers-title] warm gold jewelry editorial" compact={index > 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
