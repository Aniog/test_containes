import ProductCard from '../product/ProductCard.jsx'
import { products } from '../../data/products.js'

export default function Bestsellers({ onAddToCart }) {
  return (
    <section id="shop" className="bg-velmora-parchment py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-goldDeep">Bestsellers</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-medium text-velmora-ink md:text-6xl">Most Treasured Pieces</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-bark">
            Five polished signatures selected for stackability, gifting ease, and everyday golden-hour glow.
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
