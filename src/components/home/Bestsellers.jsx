import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers({ onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 border-b border-velmora-sand pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Most loved</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-espresso md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-cocoa/75">
            Gift-ready pieces with polished finishes, soft sparkle, and the everyday ease Velmora is known for.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
