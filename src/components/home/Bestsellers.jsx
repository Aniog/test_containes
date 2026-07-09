import ProductCard from '../products/ProductCard.jsx'
import { products } from '../../data/products.js'

export default function Bestsellers({ onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-stone-50 py-16 text-stone-950 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              The Velmora Edit
            </p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-stone-950 md:text-7xl">
              Bestsellers
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-stone-700">
            Five luminous signatures under $120, selected for everyday stacks, thoughtful gifting, and refined shine.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
