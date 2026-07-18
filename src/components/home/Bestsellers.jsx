import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers({ onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-bronze">Most loved</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-ink md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-taupe">Polished essentials and gift-ready pieces selected for their soft shine, wearability, and quiet statement.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
